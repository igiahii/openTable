"use client";

import { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import UseAuth from "../../hooks/useAuth";
import { AuthenticationContext } from "../context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";

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
  const { error, data, loading} = useContext(
    AuthenticationContext
  );
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);
  const { signin } = UseAuth();

  useEffect(() => {
    if (input.email && input.password) {
      return setDisabled(false);
    }
    setDisabled(true);
  }, [input]);

  const InputHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const clickHandler = () => {
    signin(input , handleClose ,handleOpen);

  };

  
  return (
    <div>
      <button
        className={` rounded border capitalize px-4  p-1  text-white bg-[#247f9e] hover:opacity-80 mr-2`}
        onClick={handleOpen}
      >
        sign in
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? (
            <div className="flex h-[600px] justify-center py-24">
              <CircularProgress color="error" />
            </div>
          ) : (
            <div className="p-2 h-[600px]">
              <div className="uppercase font-bold text-center pb-2 border-b mb-2 ">
                <p className="text-sm">sign in</p>
            
              </div>
              <div className="m-auto">
                <h2 className="text-2xl font-normal text-center">
                  Log Into Your Account
                </h2>
                <div className="my-3 flex flex-wrap justify-between text-sm">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={input.email}
                    onChange={(e) => InputHandleChange(e)}
                    className="border rounded p-2 my-1 py-3 w-full outline-none  focus:border-red-600"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={input.password}
                    onChange={(e) => InputHandleChange(e)}
                    className="border rounded my-1 p-2 py-3 w-full outline-none  focus:border-red-600"
                  />
                </div>
                <button
                  onClick={clickHandler}
                  disabled={disabled}
                  className="uppercase bg-[#da3743] w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-500"
                >
                  sign in
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
