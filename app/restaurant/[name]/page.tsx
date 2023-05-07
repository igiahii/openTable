// components
import NavDetails from "./component/NavDetails";
import Title from "./component/Title";
import Rating from "./component/Rating";
import Describation from "./component/describation";
import Photos from "./component/Photos";
import Reviews from "./component/Reviews";
import ReservationBox from "./component/ReservationBox(c)";

// Sass
// import styles from "./../styles/page.module.scss";

function restaurantDetailPage() {
  return (
    <>
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
    </>
  );
}

export default restaurantDetailPage;
