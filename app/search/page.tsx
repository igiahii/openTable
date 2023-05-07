import Header from "./component/Header";
import SearchSideBar from "./component/SearchSideBar";
import RestaurantCard from "./component/RestaurantCard";
// import styles from "./../styles/page.module.scss";


function searchPage() {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6 p-2">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}

export default searchPage;
