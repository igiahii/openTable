import { Dosis } from "@next/font/google";
import NavBar from "../../component/navBar";
import Header from "./component/Header";
import Form from "./component/Form";
// import styles from "./../styles/page.module.scss";
const dosis = Dosis({ subsets: ["latin"] });

function reservePage() {
  return (
    <main className={dosis.className}>
      <main className="  min-h-screen w-screen bg-gray-300">
        <main className="m-auto  bg-white max-w-screen-xl ">
          <NavBar />
          <div className="border-t flex max-h-screen ">
            <div className="py-9 w-3/5 m-auto">
              <Header />
              <Form />
            </div>
          </div>
        </main>
      </main>
    </main>
  );
}

export default reservePage;
