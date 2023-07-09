import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { AvailableTable } from "../../../../reserve/restaurant/availableTable";

const prisma = new PrismaClient();
export default async function ReserveHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { slug, date, selectedTime, partySize } = req.query as {
      slug: string;
      date: string;
      selectedTime: string;
      partySize: string;
    };
    const {
      bookerFirstname,
      bookerLastname,
      bookerEmail,
      bookerPhone,
      bookerOccasion,
      bookerRequest,
    } = req.body;
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
        tables: true,
        open_time: true,
        close_time: true,
      },
    });

    if (!restaurant) {
      return res.status(404).json({
        errorMessage: "Restaurant not found",
      });
    }
    if (
      new Date(`${date}T${selectedTime}`) <
        new Date(`${date}T${restaurant.open_time}`) ||
      new Date(`${date}T${selectedTime}`) >
        new Date(`${date}T${restaurant.close_time}`)
    ) {
      return res.status(400).json({
        errorMessage: "Restaurant is not open in that time ",
      });
    }

    const searchTimesWithTables = await AvailableTable({
      selectedTime,
      date,
      res,
      restaurant,
    });

    if (!searchTimesWithTables) {
      return res.status(400).json({
        errorMessage: "invalid data provided",
      });
    }

    const searchTimeWithTable = searchTimesWithTables.find((t) => {
      return (
        t.date.toISOString() ===
        new Date(`${date}T${selectedTime}`).toISOString()
      );
    });
    if (!searchTimeWithTable) {
      return res.status(400).json({
        errorMessage: "no availablity , can not book!",
      });
    }

    const tablesCount: {
      2: number[];
      4: number[];
    } = {
      2: [],
      4: [],
    };

    searchTimeWithTable.tables.forEach((table) => {
      if (table.seats === 2) {
        tablesCount[2].push(table.id);
      } else {
        tablesCount[4].push(table.id);
      }
    });

    let reservedTablesById: number[] = [];
    let remainingSeats = parseInt(partySize);
    while (remainingSeats > 0) {
      if (remainingSeats >= 3) {
        if (tablesCount[4].length) {
          reservedTablesById.push(tablesCount[4][0]);
          tablesCount[4].shift();
          remainingSeats = remainingSeats - 4;
        } else {
          reservedTablesById.push(tablesCount[2][0]);
          tablesCount[2].shift();
          remainingSeats = remainingSeats - 2;
        }
      } else {
        if (tablesCount[2].length) {
          reservedTablesById.push(tablesCount[2][0]);
          tablesCount[2].shift();
          remainingSeats = remainingSeats - 2;
        } else {
          reservedTablesById.push(tablesCount[4][0]);
          tablesCount[4].shift();
          remainingSeats = remainingSeats - 4;
        }
      }
    }

    const booking = await prisma.booking.create({
      data: {
        number_of_people: parseInt(partySize),
        booker_firstname: bookerFirstname,
        booker_lastname: bookerLastname,
        booker_email: bookerEmail,
        booker_phone: bookerPhone,
        booker_occasion: bookerOccasion,
        booker_request: bookerRequest,
        restaurant_id: restaurant.id,
        booking_time: new Date(`${date}T${selectedTime}`),
      },
    });

    const bookingOnTablesData = reservedTablesById.map((table_id) => {
      return {
        table_id,
        booking_id: booking.id,
      };
    });

    await prisma.bookingsOnTable.createMany({ data: bookingOnTablesData });

    return res.json({
      booking,
      reservedTablesById
    });
  }
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?partySize=4&selectedTime=17:00:00.000Z&date=2023-06-29
