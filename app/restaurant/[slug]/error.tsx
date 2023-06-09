"use client";
import React from "react";
import Image from "next/image";
import errorMascot from "./../../../public/icons/error.png";
function error({error} : {error : Error}) {
  return (
    <div className="h-[93vh] overflow-hidden bg-gray-200 flex flex-col justify-center items-center ">
      <Image className="w-56 mb-8" src={errorMascot} alt="error" />
      <div className="bg-white px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold">Well, this is embarrassing</h3>
        <p className="text-base font-bold"> {error.message}</p>
        <p className="mt-6 text-sm font-light"> Error Code: 400 </p>
      </div>
    </div>
  );
}

export default error;
