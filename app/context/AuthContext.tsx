"use client";
import axios from "axios";
import { getCookie } from "cookies-next";
import React, { useState, createContext, useEffect } from "react";

interface IUser {
  firstname: string;
  lastname: string;
  phone: string;
  id: number;
  email: string;
  city: string;
}

interface IState {
  loading: boolean;
  error: string | null;
  data: IUser | null;
}
interface IauthState extends IState {
  setAuthstate: React.Dispatch<React.SetStateAction<IState>>;
}
export const AuthenticationContext = createContext<IauthState>({
  loading: false,
  data: null,
  error: null,
  setAuthstate: () => {},
});

function AuthContext({ children }: { children: React.ReactNode }) {
  const [authstate, setAuthstate] = useState<IState>({
    loading: true,
    data: null,
    error: null,
  });


  const fetchUser = async () => {
    setAuthstate({
      loading: true,
      data: null,
      error: null,
    })
    try {
      const jwt =  getCookie("jwt");

      if (!jwt) {
        return setAuthstate({
          loading: false,
          data: null,
          error: null,
        });
      }

      const response = await axios.get("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("i am here" , response);
      
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
      setAuthstate({
        loading: false,
        data: response.data,
        error: null,
      });
    } catch (error: any) {
      setAuthstate({
        loading: false,
        data: null,
        error: error.response.data.errorMessage,
      });
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <AuthenticationContext.Provider
      value={{
        ...authstate,
        setAuthstate,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthContext;
