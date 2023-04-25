import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./../styles/page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-gray-300">
      <main className="m-auto bg-white max-w-screen-2xl ">
        <nav className="bg-white flex justify-between p-2">
          <a
            className="capitalize font-sans font-bold text-gray-700 text-2xl"
            href=""
          >
            openTable
          </a>
          <div className="flex">
            <button className="border rounded capitalize text-white bg-[#247f9e] px-3 mr-2 p-1 ">
              sign in
            </button>
            <button className="border rounded capitalize bg-white px-3 p-1 ">
              sign Up
            </button>
          </div>
        </nav>
        <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
          <div className="text-center mt-10 ">
            <h1 className=" font-bold capitalize text-white text-4xl pt-5 mb-2">
              find your table for any occaision
            </h1>
            <div className="flex py-3 text-lg text-left m-auto justify-center">
              <input
                className="rounded  w-[450px] p-2  mr-3 focus:border-l-stone-300"
                type="search "
                placeholder="Location, Restaurant, or Cuisine"
              />
              <button className="rounded bg-red-600 font-bold py-2 px-9 text-white">
                Let's Go
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap m-auto mt-10 py-3 px-36">
          <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
            <img
              src="https://resizer.otstatic.com/v2/photos/wide-huge/3/30030825.jpg"
              alt="Hard Rock Cafe - Amsterdam"
            />
          </div>
        </div>
      </main>
    </main>
  );
}
