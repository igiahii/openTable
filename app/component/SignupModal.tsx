"use client";

import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export interface Inputtype {
  firstname: string;
  lastname: string;
  phone: string;
  city: string;
  email: string;
  password: string;
  confirmpass : string
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

  return (
    <div>
      <button
        className={` rounded border capitalize px-4  p-1 bg-white border-[#247f9e]  text-[#247f9e]`}
        onClick={handleOpen}
      >
        sign up
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
              <button className="uppercase bg-[#da3743] w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray">
                create account
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}


