'use client'
import Link from "next/link";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../hooks/useAuth";
// import { Link } from "react-router-dom";


function NavBar() {
  const {data , loading} = useContext(AuthenticationContext)
  const {logOut} = useAuth()
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
            <div>

            
           {loading ? (
              null
           ):(
            <div className="flex">
              {data?.firstname ? (
                <span className="flex items-center">
                <p className="text-lg font-bold capitalize mr-2"> Hi, {data.firstname} {data.lastname}</p>
                <button onClick={logOut} className=" rounded border font-semibold capitalize px-4  p-1  text-white bg-red-600 hover:opacity-80 mr-2">Logout</button>
                </span>
                ):(
                  <>
                <LoginModal />
                <SignupModal/>
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