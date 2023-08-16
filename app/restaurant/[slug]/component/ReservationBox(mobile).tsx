"use client";
import { useState } from "react";
import { PartySize as PartySizes, times } from "./../../../../dataTable";
import DatePicker from "react-datepicker";
import UseAvailable from "../../../../hooks/useAvailable";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { Time, convertToDisplayTime } from "../../../../utils/convertToDisplayTime";

function ReservationBoxMob({
  openTime,
  closeTime,
  slug,
}: {
  openTime: string;
  closeTime: string;
  slug: string;
}) {
  // const today = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [partySize, setPartySize] = useState("2");
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);
  const [selectedTime, setSelectedTime] = useState(openTime);
  const { data, error, loading, fetchDataparams } = UseAvailable();



  const filterTimesOpenWindow = () => {
    const restaurantAvailableTimes: typeof times = [];
    let isWithinTime: boolean = false;

    times.forEach((time) => {
      if (time.time === openTime) {
        isWithinTime = true;
      }
      if (isWithinTime) {
        restaurantAvailableTimes.push(time);
      }
      if (time.time === closeTime) {
        isWithinTime = false;
      }
    });
    return restaurantAvailableTimes;
  };

  const handleDateChange = (date: Date) => {
    setDay(date.toISOString().split("T")[0]);
    setStartDate(date);
  };
  const clickHandler = () => {
    fetchDataparams({
      slug,
      date: day,
      partySize,
      selectedTime,
    });
  };

  return (
    <div className=" relative sm:hidden">
      <div className=" shadow-xl top-15 bg-white p-3 rounded">
        <div className="text-center border-b pb-3 font-bold">
          <h4>Make a Reservation</h4>
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="people" className="font-medium">
            Party size
          </label>
          <select
            name=""
            id="people"
            className="p-3 border-b font-light"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
          >
            {PartySizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-around">
          <div className="flex w-auto ">
            <div className="flex flex-col ">
              <label className="font-medium" htmlFor="datereserve">
                Date
              </label>
              <DatePicker
                className="py-3 cursor-pointer border-b font-light w-28"
                dateFormat="MMMM dd"
                selected={startDate}
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div className="flex w-auto ">
            <div className="flex flex-col ">
              <label className="font-medium pb-1" htmlFor="timereserve">
                Time
              </label>
              <select
                name=""
                className="py-3 border-b font-light"
                id="timereserve"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                {filterTimesOpenWindow().map((item) => (
                  <option key={item.time} value={item.time}>
                    {item.displayTime}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <button
          onClick={clickHandler}
          className=" bg-[#da3743] hover:bg-[#b8222d] text-lg text-white font-bold w-full p-3 rounded text-center mt-3 mb-2"
          disabled={loading}
        >
          {loading ? (
            
              <CircularProgress size='21px' color="inherit" />
           
          ) : (
            `Find a Time`
          )}
        </button>
      
    
      {(data && data.length) ?(
        <div className="mt-4">
          <p className="text-base font-semibold">Select a Time</p>
          <div className="flex flex-wrap mt-2">
            {data.map(t => {
              return t.available ? <Link href={`/reserve/${slug}?date=${day}T${t.time}&partySize=${partySize}`} className="bg-[#da3743]  hover:bg-[#b8222d] p-2 w-24 cursor-pointer text-center text-white rounded mb-3 mr-3">
                <p className="text-sm font-bold">
                {convertToDisplayTime(t.time as Time)}
                </p>
                </Link>
                : <p className="p-2 bg-gray-300 rounded text-center w-24 text-sm font-bold mb-3 mr-3"> {convertToDisplayTime(t.time as Time)}</p>
            })}
          </div>
        </div>
      ): null}
        </div>
    </div>
  );
}

export default ReservationBoxMob;
