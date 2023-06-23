import axios from "axios";
import { AuthenticationContext } from "../app/context/AuthContext";
import { useContext } from "react";
import { deleteCookie } from "cookies-next";

const UseAuth = () => {
  const { setAuthstate , error } = useContext(AuthenticationContext);
  const signin = async (
    { email, password }: { email: string; password: string },
    handleClose: () => void,
    handleOpen: () => void
  ) => {
    setAuthstate({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const response = await axios.post("/api/auth/signin", {
        email,
        password,
      });
      setAuthstate({
        data: response.data,
        error: null,
        loading: false,
      });
      console.log(response);
      handleClose()
    } catch (error: any) {
      setAuthstate({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    
    }
   
  };
  const signup = async (
    {
      email,
      password,
      phone,
      city,
      firstname,
      lastname,
      confirmpass,
    }: {
      email: string;
      password: string;
      phone: string;
      city: string;
      firstname: string;
      lastname: string;
      confirmpass : string
    },
    handleClose: () => void
  ) => {
    setAuthstate({
        data: null,
        error: null,
        loading: true,
      });
      try {
        const response = await axios.post("/api/auth/signup", {
            firstname,
            lastname,
            email,
            phone,
            city,
            password,
            confirmpass,
        });
        setAuthstate({
          data: response.data,
          error: null,
          loading: false,
        });
        handleClose();
      } catch (error: any) {
        setAuthstate({
          data: null,
          error: error.response.data.errorMessage,
          loading: false,
        });
      }

  };

  const logOut = () =>{
    deleteCookie("jwt")
    setAuthstate({
      data: null,
      error: null,
      loading: false,
    });
  }

  return {
    signin,
    signup,
    logOut
  };
};

export default UseAuth;
