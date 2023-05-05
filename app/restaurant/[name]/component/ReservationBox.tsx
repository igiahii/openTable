function ReservationBox() {
    const today = new Date().toISOString().split("T")[0];

    return ( 
        <div className="  w-[27%] relative">
        <div className="fixed shadow-xl top-15 bg-white w-[16%] p-3 rounded">
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
              className="py-3 border-b font-light"
            >
              <option value="2">2 person</option>
              <option value="3">3 person</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex w-auto ">
              <div className="flex flex-col ">
                <label className="font-medium" htmlFor="datereserve">
                  Date
                </label>
                <input
                  type="date"
                  value={today}
                  min={today}
                  name=""
                  className="py-3 border-b font-light"
                  id="datereserve"
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
                >
                  <option value="7">7:00 p.m.</option>
                  <option value="8">8:00 p.m.</option>
                  <option value="9">9:00 p.m.</option>
                </select>
              </div>
            </div>
          </div>
          <button className=" bg-[#da3743] hover:bg-[#b8222d] text-lg text-white font-bold w-full p-3 rounded text-center mt-3">
            Find a Time
          </button>
          <p className=" text-sm mt-3 font-semibold capitalize">
            booked 3 times today
          </p>
        </div>
      </div>
     );
}

export default ReservationBox;