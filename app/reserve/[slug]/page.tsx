import Header from "./component/Header";
import Form from "./component/Form";
// import styles from "./../styles/page.module.scss";

function reservePage() {
  return (
    <div className="border-t flex max-h-screen ">
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default reservePage;
