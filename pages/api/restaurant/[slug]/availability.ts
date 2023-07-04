import { NextApiRequest, NextApiResponse } from "next";
import { times } from "./../../../../dataTable";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function Availability(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug, partySize, selectedTime, date } = req.query as {
    slug: string;
    partySize: string;
    selectedTime: string;
    date: string;
  };

  if (!partySize || !selectedTime || !date) {
    return res.status(400).json({
      errorMessage: "invalid data provided",
    });
  }

  const searchingTimes = times.find((t) => {
    return t.time === selectedTime;
  })?.searchTimes;

  if (!searchingTimes) {
    return res.status(400).json({
      errorMessage: "invalid data provided",
    });
  }

  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${date}T${searchingTimes[0]}`),
        lte: new Date(`${date}T${searchingTimes[searchingTimes.length - 1]}`),
      },
    },
    select: {
      booking_time: true,
      number_of_people: true,
      tables: true,
    },
  });

  const bookingObj: { [key: string]: { [key: number]: true } } = {};

  bookings.forEach((booking) => {
    bookingObj[booking.booking_time.toISOString()] = booking.tables.reduce(
      (obj, table) => {
        return {
          ...obj,
          [table.table_id]: true,
        };
      },
      {}
    );
  });

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      tables: true,
      open_time: true,
      close_time: true,
    },
  });
  if (!restaurant) {
    return res.status(400).json({
      errorMessage: "invalid data provided",
    });
  }

  const tables = restaurant.tables;

  const searchTimesWithTables = searchingTimes.map((searchingTime) => {
    return {
      date: new Date(`${date}T${searchingTime}`),
      time: searchingTime,
      tables,
    };
  });

  searchTimesWithTables.forEach((searchTime) => {
    searchTime.tables = searchTime.tables.filter((table) => {
      if (bookingObj[searchTime.date.toISOString()]) {
        if (bookingObj[searchTime.date.toISOString()][table.id]) {
          return false;
        }
      }
      return true;
    });
  });

  let availabilities = searchTimesWithTables.map((searchTime) => {
    const sumSeats = searchTime.tables.reduce((sum, table) => {
      return sum + table.seats;
    }, 0);
    return {
      time: searchTime.time,
      available: sumSeats >= parseInt(partySize),
    };
  });

  let filterAvailabilities = availabilities.filter((availability) => {
    const TimeAfterOpening =
      new Date(`${date}T${availability.time}`) >=
      new Date(`${date}T${restaurant.open_time}`);
    const TimeBeforeClosing =
      new Date(`${date}T${availability.time}`) <=
      new Date(`${date}T${restaurant.close_time}`);
    return TimeAfterOpening && TimeBeforeClosing;
  });

  return res.json( filterAvailabilities );
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?partySize=4&selectedTime=17:00:00.000Z&date=2023-06-29
