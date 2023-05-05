
import { Dosis } from "@next/font/google";


// import components
import NavBar from "./component/navBar";
import Header from "./component/Header";
import RestaurantCard from "./component/RestaurantCard";

// import styles from "./../styles/page.module.scss";

// fonts
const dosis = Dosis({ subsets: ["latin"] });

export default function Home() {

  return (
    <main className={dosis.className}>
      <main className="min-h-screen w-screen bg-gray-300">
        <div className="p-1" />
        <main className="m-auto mt-5 bg-white max-w-screen-xl ">
          <NavBar/>
          <Header/>
          {/* Cards */}
          <div className=" flex flex-wrap m-auto mt-5 py-3 px-36">
          <RestaurantCard/>
          </div>
          {/* Cards */}
        </main>
      </main>
    </main>
  );
}
