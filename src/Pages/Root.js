import React from "react";
import { Outlet } from "react-router-dom";
import Navs from "../Components/Navs/Navs";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Navs />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Root;
// 'live_O1P6WzQTUCef1gD2qfZr2svMlVjslOIoiy9X8P01ZSpM9ZKPCQpWO5FUtta8yN3h'
//HUa7xMpyO0aEIGbpn+brVQ==AiYiSW1W7NBt0rro
