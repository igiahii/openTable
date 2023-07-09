"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const locations : string[] =["toronto" , "ottawa" , "niagara"]
  const compare = () : string =>{
    if (locations.includes(query.toLowerCase()) ) {
      return "query"
    }
    return "cuisine"
  }
  return (
    <div className="flex py-3 sm:text-lg text-left m-auto justify-center">
      <input
        className="rounded  sm:w-[450px] p-2  mr-3 w-52 focus:border-l-stone-300"
        type="search "
        placeholder="Find a Location or Cuisine"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        disabled={query === ""}
        className="rounded disabled:opacity-70 disabled:cursor-not-allowed bg-red-600 font-bold py-2 px-3 sm:px-9 text-white"
        onClick={() => {
          router.push(`/search?${compare()}=${query}`);
          setQuery("");
        }}
      >
        Let's Go
      </button>
    </div>
  );
}

export default SearchBar;
