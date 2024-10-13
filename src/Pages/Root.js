import React from "react";
import { useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navs from "../Components/Navs/Navs";
import Footer from "../Components/Footer/Footer";
import Loading from "../Components/Loading/Loading";

const Root = () => {
  let navigation= useNavigation();


  return (
    <>
      
      <Navs />
      <main>
        {navigation.state==="loading"?<Loading/>:""}
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Root;
// 'live_O1P6WzQTUCef1gD2qfZr2svMlVjslOIoiy9X8P01ZSpM9ZKPCQpWO5FUtta8yN3h' cats
// 'live_2KezZROYSVMIobsbx3rgXKK80nHNTjiwEeW2TezLDOCWKSIMuxp11MLd0wxnKCMD'  dogs
//HUa7xMpyO0aEIGbpn+brVQ==AiYiSW1W7NBt0rro
