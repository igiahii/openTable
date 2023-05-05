import { Dosis } from "@next/font/google";
import NavBar from "../component/navBar";
import Header from "./component/Header";
import SearchSideBar from "./component/SearchSideBar";
import RestaurantCard from "./component/RestaurantCard";
// import styles from "./../styles/page.module.scss";

const dosis = Dosis({ subsets: ["latin"] });

function searchPage() {
  return (
    <main className={dosis.className}>
      <main className="min-h-screen w-screen bg-gray-300">
        <main className="m-auto  bg-white max-w-screen-xl ">
          <NavBar />
          <Header />
          <div className="flex py-4 m-auto w-2/3 justify-between items-start">
            <SearchSideBar />
            <div className="w-5/6 p-2">
              <RestaurantCard />
            </div>
          </div>
        </main>
      </main>
    </main>
  );
}

export default searchPage;
