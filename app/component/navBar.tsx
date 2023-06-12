import Link from "next/link";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

function NavBar() {
    return ( 
        <nav className="bg-white flex justify-between p-2">
            <Link
              className="capitalize font-sans ml-2 font-bold text-gray-700 text-2xl"
              href="/"
            >
              <img
                className="h-8 w-auto"
                src="https://cdn.otstatic.com/cfe/12/images/opentable-logo-153e80.svg"
                alt="OpenTable"
              />
            </Link>
            <div className="flex">
              {/* <button className="border rounded capitalize text-white bg-[#247f9e] px-3 mr-2 p-1 ">
                sign in
              </button> */}
              <LoginModal />
              <SignupModal/>
              {/* <button className="border rounded capitalize bg-white px-3 p-1 ">
                sign Up
              </button> */}
            </div>
          </nav>
     );
}

export default NavBar;