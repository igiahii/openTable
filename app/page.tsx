
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Dosis } from "@next/font/google";
// import styles from "./../styles/page.module.scss";

const dosis = Dosis({ subsets: ["latin"] });

export default function Home() {


 
  return (
    <main className={dosis.className}>
      <main className="min-h-screen w-screen bg-gray-300">
        <main className="m-auto mt-5 bg-white max-w-screen-2xl ">
          <nav className="bg-white flex justify-between p-2">
            <a
              className="capitalize font-sans ml-2 font-bold text-gray-700 text-2xl"
              href="http://localhost:3000/"
            >
              <img className="h-8 w-auto" src="https://cdn.otstatic.com/cfe/12/images/opentable-logo-153e80.svg" alt="OpenTable" />
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
          <div className="h-96 flex overflow-hidden">
            <div className="h-full w-full bg-center items-center bg-[url('https://resizer.otstatic.com/v2/photos/wide-huge/1/25950712.jpg')] bg-cover flex justify-center"></div>
          </div>
          <div className="flex w-2/3 justify-around items-start -mt-11">
            <div className="flex-col w-[70%] bg-white rounded  p-3 shadow">
              <nav className=" border-b w-full text-base pb-3 items-end">
                <ul className="flex font-medium">
                  <li
                    role="button"
             
                    className="ml-2  mr-7 hover:text-[#da3743]"
                  >
                    Overview
                  </li>
                  <li
                    role="button"
               
                    className="mr-7 hover:text-[#da3743]"
                  >
                    Photos
                  </li>
                  <li role="button" className="mr-7 hover:text-[#da3743]">
                    Menu
                  </li>
                  <li role="button" className="mr-7 hover:text-[#da3743]">
                    Reviews
                  </li>
                </ul>
              </nav>
              <div className=" mt-5 pb-7 border-b">
                <h1 className="text-5xl capitalize font-bold ">
                  Hard Rock Cafe - Amesterdam
                </h1>
              </div>
              <div className="flex items-end font-sans">
                <div className="rating mt-3 flex font-medium item-center">
                  <p className="rating item-center flex">⭐⭐⭐⭐</p>
                  <p className="ml-3">4.7</p>
                </div>
                <div className="ml-4 font-medium">
                  <p>💬 6000 reviews</p>
                </div>
              </div>
              <div className="mt-4 flex">
                <p className="font-medium text-justify pr-2 text-lg">
                  NENI is much more than just a name: the four letters are
                  chosen in honor of the sons of Haya Molcho, Nuriel, Elior,
                  Nadiv and Ilan, and reflect the philosophy of the Molcho
                  family. The Molcho family has always given an important place
                  to family and friends, with whom they share their meals in the
                  greatest conviviality. NENI is like them: a large family
                  business which now welcomes Paris with open arms after Zurich,
                  Berlin, Hamburg, Munich and Cologne.
                </p>
              </div>
              {/* Images */}
              <div >
                <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                  5 Photos
                </h1>
                <div className="flex flex-wrap">
                  <img
                    className="w-56 h-44 rounded mr-1 mb-1 transition transform hover:scale-105"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/1/26242152.jpg"
                    alt=""
                  />
                  <img
                    className="w-56 h-44 rounded mr-1 mb-1 transition transform hover:scale-105"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/1/26259658.jpg"
                    alt=""
                  />
                  <img
                    className="w-56 h-44 rounded mr-1 mb-1 transition transform hover:scale-105"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/1/27291999.jpg"
                    alt=""
                  />
                  <img
                    className="w-56 h-44 rounded mr-1 mb-1 transition transform hover:scale-105"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/1/47482170.jpg"
                    alt=""
                  />
                  <img
                    className="w-56 h-44 rounded mr-1 mb-1 transition transform hover:scale-105"
                    src="https://resizer.otstatic.com/v2/photos/xlarge/1/26443972.jpg"
                    alt=""
                  />
                </div>
              </div>
              {/* Images */}
              {/* Reviews */}
              <div >
                <h1 className="text-3xl font-bold mt-10 mb-7 border-b pb-5">
                  What 1235 people are saying
                </h1>
              </div>
              {/* review cards */}
              <div className="border-b mb-7 pb-7">
                <div className="flex">
                  <div className="w-1/6 flex justify-center flex-col items-center">
                    <div className="rounded-full flex justify-center items-center h-16 w-16 bg-blue-400">
                      <h1 className="text-white item-center text-2xl font-semibold ">
                        IG
                      </h1>
                    </div>
                    <p className="font-bold text-center">Iman Giahi</p>
                  </div>
                  <div className="flex-col ml-10 w-5/6">
                    <div className="flex items-center">
                      <div className="flex mr-5">⭐⭐⭐</div>
                    </div>
                    <div className="mt-4">
                      <p className="text-base font-light text-justify pr-2 ">
                        Passage a paris. Très bien reçu. La table était prête
                        avant l'heure. Le serveur était très sympa. L'ambiance
                        et le repas étaient vraiment bon. Nous avons passé une
                        excellente soirée
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* review cards */}
              <div className="border-b mb-7 pb-7">
                <div className="flex">
                  <div className="w-1/6 flex justify-center flex-col items-center">
                    <div className="rounded-full flex justify-center items-center h-16 w-16 bg-pink-600">
                      <h1 className="text-white item-center text-2xl font-semibold ">
                        PR
                      </h1>
                    </div>
                    <p className="font-bold leading-5 mt-1 text-center">
                      Paria Farahmand
                    </p>
                  </div>
                  <div className="flex-col ml-10 w-5/6">
                    <div className="flex items-center">
                      <div className="flex mr-5">⭐⭐</div>
                    </div>
                    <div className="mt-4">
                      <p className="text-base font-light text-justify pr-2 ">
                        My last dinner wasn’t so excellent It’s always the same
                        food no variety I booked for 8:45pm but when I arrived
                        the table was still occupied I had to wait for 15min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Reviews */}
            </div>
          </div>
        </main>
      </main>
    </main>
  );
}
