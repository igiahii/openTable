"use client";

import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AuthenticationContext } from "../context/AuthContext";
import UseAuth from "../../hooks/useAuth";
import { Alert, CircularProgress } from "@mui/material";

export interface Inputtype {
  firstname: string;
  lastname: string;
  phone: string;
  city: string;
  email: string;
  password: string;
  confirmpass: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function LoginModal() {
  const [open, setOpen] = useState(false);
  const handleCloseup = () => setOpen(false);
  const handleOpenup = () => setOpen(true);
  const {error , data , loading , setAuthstate} = useContext(AuthenticationContext) 
  const [disabled, setDisabled] = useState(true);
  const { signup } = UseAuth();
  const [input, setInput] = useState<Inputtype>({
    firstname: "",
    lastname: "",
    phone: "",
    city: "",
    email: "",
    password: "",
    confirmpass: "",
  });

  const InputHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const clickHandler = () => {
    signup(input , handleCloseup);
  };
  useEffect(() => {
    if (
      input.email &&
      input.password &&
      input.city &&
      input.firstname &&
      input.lastname &&
      input.confirmpass &&
      input.phone
    ) {
      return setDisabled(false);
    }
    setDisabled(true);
  }, [input]);

  return (
    <div>
      <button
        className={` rounded border capitalize sm:px-4 px-2  sm:p-2 p-1 bg-white border-[#247f9e]  text-[#247f9e]`}
        onClick={handleOpenup}
      >
        sign up
      </button>
      <Modal
        open={open}
        onClose={handleCloseup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {loading ? (
          <div className="flex h-[600px] items-center justify-center py-24">
               <CircularProgress color="error" />
               <p className="text-sm capitalize font-medium pl-2">creating an account...</p>
          </div>
        ):(
          <div className="p-2 h-[600px]">
          <div className="uppercase font-bold text-center pb-2 border-b mb-2 ">
            <p className="text-sm">create account</p>
          </div>
          <div className="m-auto">
            <h2 className="text-2xl font-normal text-center">
              Create Your OpenTable Account
            </h2>
            <div className="my-3 flex flex-wrap justify-between text-sm">
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                value={input.firstname}
                onChange={(e) => InputHandleChange(e)}
                className="border rounded my-1 p-2 py-3 w-[49%] outline-none  focus:border-red-600"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={input.lastname}
                onChange={(e) => InputHandleChange(e)}
                className="border rounded my-1 p-2 py-3 w-[49%] outline-none  focus:border-red-600"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={input.email}
                onChange={(e) => InputHandleChange(e)}
                className="border rounded p-2 my-1 py-3 w-full outline-none  focus:border-red-600"
              />
              <input
                type="tel"
                placeholder="Phone"
                name="phone"
                value={input.phone}
                onChange={(e) => InputHandleChange(e)}
                className="border rounded p-2 my-1 py-3 w-[49%] outline-none  focus:border-red-600"
              />
              <input
                type="text"
                placeholder="City"
                name="city"
                value={input.city}
                onChange={(e) => InputHandleChange(e)}
                className="border rounded p-2 my-1 py-3 w-[49%] outline-none  focus:border-red-600"
              />
              <input
                type="text"
                placeholder="Password"
                name="password"
                value={input.password}
                onChange={(e) => InputHandleChange(e)}
                className="border rounded my-1 p-2 py-3 w-full outline-none  focus:border-red-600"
              />
              <input
                type="text"
                placeholder="Confirm Password"
                name="confirmpass"
                value={input.confirmpass}
                onChange={(e) => InputHandleChange(e)}
                className="border rounded my-1 p-2 py-3 w-full outline-none  focus:border-red-600"
              />
            </div>
            <button disabled={disabled} onClick={clickHandler} className="uppercase bg-[#da3743] w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-500">
              create account
            </button>
            {error ? <Alert severity="error">{error}</Alert> : null}
          </div>
        </div>
        )}
        </Box>
      </Modal>
    </div>
  );
}
