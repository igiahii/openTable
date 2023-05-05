'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-center mt-10 ">
        <h1 className=" font-bold  capitalize text-white text-4xl pt-5 mb-2">
          find your table for any occaision
        </h1>
        <div className="flex py-3 text-lg text-left m-auto justify-center">
          <input
            className="rounded  w-[450px] p-2  mr-3 focus:border-l-stone-300"
            type="search "
            placeholder="Location, Restaurant, or Cuisine"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            disabled={location === ""}
            className="rounded disabled:opacity-70 disabled:cursor-not-allowed bg-red-600 font-bold py-2 px-9 text-white"
            onClick={() => router.push("/search")}
          >
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
