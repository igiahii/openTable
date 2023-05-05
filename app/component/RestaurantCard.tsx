"use client";

import { useRouter } from "next/navigation";


function RestaurantCard() {
    const router = useRouter()
    return ( 
        <div className="w-60 h-[310px] m-2 transition-transform hover:-translate-y-1 duration-300 shadow-lg hover:shadow-xl rounded overflow-hidden border ">
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/3/30030825.jpg"
          alt="Hard Rock Cafe - Amsterdam"
          className="h-36 w-full overflow-hidden transition transform duration-200 hover:scale-110"
        />
        <div className="flex  p-2 ">
          <h3 className="text-left text-xl font-bold">Hard Rock Cafe</h3>
        </div>
        <div className="flex  flex-start align-baseline ">
          <div className=" ml-2  ">*****</div>
          <p className=" ml-2 ">77 reveiws</p>
        </div>
        <div className="text-sm ml-2 mb-1 flex font-normal capitalize">
          <p className="mr-3">mexican</p>
          <p className="mr-3">$$$$</p>
          <p className="mr-3">Toranto</p>
        </div>
        <p className="ml-2 text-sm mb-1 font-bold capitalize">
          booked 3 times today
        </p>
        <button
          onClick={() => router.push("/restaurant/hard-rock-cafe")}
          className=" ml-2 rounded capitalize text-[#2d333f] border-solid border-2 font-semibold  border-gray-300 hover:border-[#da3743] hover:border-2 px-3 mr-2 p-1 "
        >
          order now
        </button>
      </div>
     );
}

export default RestaurantCard;