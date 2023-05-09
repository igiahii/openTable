import NavDetails from "../component/NavDetails";
import MenuCard from "./component/MenuCard";
import Title from "./component/Title";
// import styles from "./../styles/page.module.scss";

function menuPage() {
  return (
    <>
      <div className="flex-col w-full bg-white rounded  p-3 shadow">
        <NavDetails />
        {/* menu */}
        <main className="bg-white mt-5">
          <div>
            <Title />
            <div className="flex flex-wrap justify-between">
              {/* MENU CARD */}
              <MenuCard />
              <MenuCard />
              {/* MENU CARD */}
            </div>
          </div>
        </main>
        {/* menu */}
      </div>
    </>
  );
}

export default menuPage;
