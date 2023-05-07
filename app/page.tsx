// import components
import Header from "./component/Header";
import RestaurantCard from "./component/RestaurantCard";

// import styles from "./../styles/page.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      {/* Cards */}
      <div className=" flex flex-wrap m-auto mt-5 py-3 px-36">
        <RestaurantCard />
      </div>
      {/* Cards */}
    </>
  );
}


