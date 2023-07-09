import { NextApiRequest, NextApiResponse } from "next";
import { times } from "./../../../../dataTable";
import { PrismaClient } from "@prisma/client";
import { AvailableTable } from "../../../../reserve/restaurant/availableTable";

const prisma = new PrismaClient();
export default async function Availability(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
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
  
    const searchTimesWithTables = await AvailableTable({selectedTime , date , res , restaurant })
  
    if (!searchTimesWithTables) {
      return res.status(400).json({
        errorMessage: "invalid data provided",
      });
    }
  
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
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?partySize=4&selectedTime=17:00:00.000Z&date=2023-06-29
