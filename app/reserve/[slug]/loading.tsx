import React from "react";

function loading() {
  return (
    <>
      <div className="h-96 bg-slate-300  w-full animate-pulse flex overflow-hidden"></div>
      <div className="flex w-[70%] m-auto h-screen justify-between items-start -mt-11">
        <div className="flex-col min-h-screen  w-[70%] bg-white rounded z-30  p-3 shadow">
          <nav className=" border-b w-full text-base bg-white  pb-3 items-end">
            <ul className="flex font-medium">
              <li className="ml-2  mr-7">Overview</li>
              <li className="mr-7">Menu</li>
            </ul>
          </nav>
        </div>
        {/* Reservation */}
        <div className="  w-[27%]  relative">
          <div className="fixed shadow-xl h-80 animate-pulse top-15 bg-white w-[16%] p-3 rounded"></div>
        </div>
        {/* Reservation */}
      </div>
    </>
  );
}

export default loading;
