import React from "react";
import { Outlet } from "react-router-dom";
import Navs from "../Components/Navs/Navs";

const Root = () => {
  return (
    <>
      <Navs />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
