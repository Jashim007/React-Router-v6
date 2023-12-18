import Header from "./Header";
import Title from "./Title";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState,  } from "react";
import MyContext from './../context/MyContext';

const Layout = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <MyContext.Provider value={{ isAuthorized, setIsAuthorized }}>
      <Title />
      <Header />
      <div className="flex items-center justify-center">
        <button
          className=" p-3 border border-blue-600 rounded-md  active:scale-95"
          onClick={() => {
            setIsAuthorized(!isAuthorized);
          }}>
          {isAuthorized ? "Logout" : "Login"}
        </button>
      </div>
      <Outlet />
      <Footer />
    </MyContext.Provider>
  );
};

export default Layout;

