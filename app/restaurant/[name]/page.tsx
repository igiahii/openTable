import { Dosis } from "@next/font/google";

// components
import NavBar from "../../component/navBar";
import NavDetails from "./component/NavDetails";
import Title from "./component/Title";
import Rating from "./component/Rating";
import Describation from "./component/describation";
import Photos from "./component/Photos";
import Reviews from "./component/Reviews";
import ReservationBox from "./component/ReservationBox";

// Sass
// import styles from "./../styles/page.module.scss";


const dosis = Dosis({ subsets: ["latin"] });

function restaurantDetailPage() {
  return (
    <main className={dosis.className}>
      <main className="min-h-screen w-screen bg-gray-300">
        <main className="m-auto bg-white max-w-screen-xl ">
          <NavBar />
          <div className="h-96 flex overflow-hidden">
            <div className="h-full w-full bg-center items-center bg-[url('https://resizer.otstatic.com/v2/photos/wide-huge/1/25950712.jpg')] bg-cover flex justify-center"></div>
          </div>
          <div className="flex w-[70%] m-auto justify-between items-start -mt-11">
            <div className="flex-col w-[70%] bg-white rounded  p-3 shadow">
              <NavDetails />
              <Title />
              <Rating />
              <Describation />
              <Photos />
              <Reviews />
            </div>
            {/* Reservation */}
            <ReservationBox />
            {/* Reservation */}
          </div>
        </main>
      </main>
    </main>
  );
}

export default restaurantDetailPage;
