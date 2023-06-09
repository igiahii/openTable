import React from "react";
import Header from "./component/Header";

function loading() {
  const numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <Header />
      <div className=" flex flex-wrap justify-center sm:justify-start m-auto mt-5 py-3 sm:pl-36 ">
        {numarr.map((num) => (
          <div
            key={num}
            className=" flex  items-center animate-pulse w-72 sm:w-60 h-[310px]  m-2 shadow-lg rounded overflow-hidden border bg-slate-300 "
          >
          </div>
        ))}
      </div>
    </>
  );
}

export default loading;
