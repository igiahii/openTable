"use client";
import Link from "next/link";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../hooks/useAuth";
// import { Link } from "react-router-dom";

function NavBar() {
  const { data, loading } = useContext(AuthenticationContext);
  const { logOut } = useAuth();
  return (
    <nav className="bg-white flex items-center justify-between p-2 ">
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
      <div>
        {loading ? null : (
          <div className="flex">
            {data?.firstname ? (
              <span className="flex items-center ">
                <span className="text-lg font-bold capitalize mr-6  relative">
                  {" "}
                  Hi, {data.firstname} {data.lastname}
                  <div className="absolute -top-2 -right-3 z-50 flex h-3 w-3 items-center justify-center">
                    <div className="h-full w-full animate-ping rounded-full bg-green-800 opacity-60"></div>
                    <div className="z-60 absolute top-0 right-0 h-full w-full rounded-full bg-green-900 opacity-80"></div>
                  </div>
                </span>
                <button
                  onClick={logOut}
                  className=" rounded border font-semibold capitalize sm:px-4 px-2 sm:p-2 p-1  text-white bg-red-600 hover:opacity-80 mr-2"
                >
                  Logout
                </button>
              </span>
            ) : (
              <>
                <LoginModal />
                <SignupModal />
              </>
            )}
          </div>
        )}
      </div>
      {/* <button className="border rounded capitalize text-white bg-[#247f9e] px-3 mr-2 p-1 ">
                sign in
              </button> */}
      {/* <button className="border rounded capitalize bg-white px-3 p-1 ">
                sign Up
              </button> */}
    </nav>
  );
}

export default NavBar;
