'use client'


import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

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
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const InputHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <button className={` rounded border capitalize px-4  p-1  text-white bg-[#247f9e] hover:opacity-80 mr-2`} onClick={handleOpen}>sign in</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="p-2 h-[600px]">
            <div className="uppercase font-bold text-center pb-2 border-b mb-2 ">
                <p className="text-sm">sign in</p>
            </div>
            <div className="m-auto">
                <h2 className="text-2xl font-normal text-center">
                Log Into Your Account
                </h2>
                <div className="my-3 flex flex-wrap justify-between text-sm">
                    <input type="email" name="email" placeholder="Email" value={input.email} onChange={(e) => InputHandleChange(e)} className="border rounded p-2 my-1 py-3 w-full outline-none  focus:border-red-600"/>
                    <input type="password" name="password" placeholder="Password" value={input.password} onChange={(e) => InputHandleChange(e)} className="border rounded my-1 p-2 py-3 w-full outline-none  focus:border-red-600"/>
                </div>
                <button className="uppercase bg-[#da3743] w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray">
                    sign in
                </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
