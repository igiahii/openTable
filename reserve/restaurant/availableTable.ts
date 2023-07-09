import { PrismaClient, Table } from "@prisma/client";
import { times } from "../../dataTable";
import { NextApiResponse } from "next";

const prisma = new PrismaClient();
export async function AvailableTable({
  selectedTime,
  date,
  res,
  restaurant,
}: {
  selectedTime: string;
  date: string;
  res: NextApiResponse;
  restaurant: {
    tables: Table[];
    open_time: string;
    close_time: string;
  };
}) {
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

  return searchTimesWithTables;
}
