import { Dosis } from "@next/font/google";
import Link from "next/link";
import NavBar from "../../../component/navBar";
import NavDetails from "../component/NavDetails";
import MenuCard from "./component/MenuCard";
import Title from "./component/Title";
// import styles from "./../styles/page.module.scss";

const dosis = Dosis({ subsets: ["latin"] });

function menuPage() {
  
  return (
    <main className={dosis.className}>
      <main className="min-h-screen w-screen bg-gray-300">
        <main className="m-auto bg-white max-w-screen-xl ">
          <NavBar/>
          <div className="h-96 flex overflow-hidden">
            <div className="h-full w-full bg-center items-center bg-[url('https://resizer.otstatic.com/v2/photos/wide-huge/1/25950712.jpg')] bg-cover flex justify-center"></div>
          </div>
          <div className="flex w-[70%] m-auto justify-between items-start -mt-11">
            <div className="flex-col w-full bg-white rounded  p-3 shadow">
             <NavDetails/>
              {/* menu */}
              <main className="bg-white mt-5">
                <div>
                  <Title/>
                  <div className="flex flex-wrap justify-between">
                    {/* MENU CARD */}
                    <MenuCard/>
                    <MenuCard/>
                    {/* MENU CARD */}
                  </div>
                </div>
              </main>
              {/* menu */}
            </div>
          </div>
        </main>
      </main>
    </main>
  );
}

export default menuPage;
