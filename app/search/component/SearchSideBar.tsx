import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { query?: string; cuisine?: string; price?: PRICE };
}) {
  return (
    <div className="w-1/5 p-3 hidden sm:block ">
      <div className="border-b flex flex-col pb-4">
        <h1 className="mb-2 font-semibold">Region</h1>
        {locations.map((loc) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                query: loc.name,
              },
            }}
            className="font-light text-reg capitalize  hover:text-red-600"
            key={loc.id}
          >
            {loc.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2 font-semibold">Cuisine</h1>
        {cuisines.map((cuis) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                cuisine: cuis.name,
              },
            }}
            className="font-light hover:text-red-600 text-reg capitalize"
            key={cuis.id}
          >
            {cuis.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4 flex flex-col">
        <h1 className="mb-2 font-semibold">Price</h1>
        <div className="flex">
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                price: PRICE.CHEAP,
              },
            }}
            className="border w-full text-reg text-green-600 hover:bg-green-600 hover:text-white font-light rounded-l p-2"
          >
            $
          </Link>
          <Link href={{
              pathname: "/search",
              query: {
                ...searchParams,
                price: PRICE.REGULAR,
              },
            }} className="border-r border-t  text-orange-600 hover:bg-orange-600 hover:text-white border-b w-full text-reg font-light p-2">
            $$
          </Link>
          <Link href={{
              pathname: "/search",
              query: {
                ...searchParams,
                price: PRICE.EXPENSIVE,
              },
            }} className="border-r border-t  text-red-600 hover:bg-red-600 hover:text-white border-b w-full text-reg font-light p-2 rounded-r">
            $$$
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchSideBar;
