// import React from 'react'
import { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainContxt = createContext();
const MainContext = (props) => {
  const [admin, setAdmin] = useState(null);
  const [user, setUser] = useState(() => {
    const lsUser = localStorage.getItem("userlogin");
    return lsUser ? JSON.parse(lsUser) : null;
  });
  const [token, setToken] = useState(null);
  const BASEURL = process.env.REACT_APP_API_BASE_URL;
  const notify = (msg, type) => {
    toast(msg, {
      type,
    });
  };

  useEffect(() => {
    userset();
  }, []);

  const userset = () => {
    const lsUser = localStorage.getItem("userlogin");
    if (lsUser != undefined) {
      setUser(JSON.parse(lsUser));
    }
  };
  return (
    <MainContxt.Provider
      value={{
        notify,
        BASEURL,
        token,
        setToken,
        admin,
        setAdmin,
        user,
        setUser,
      }}
    >
      <ToastContainer />
      {props.children}
    </MainContxt.Provider>
  );
};

export default MainContext;
export { MainContxt };
