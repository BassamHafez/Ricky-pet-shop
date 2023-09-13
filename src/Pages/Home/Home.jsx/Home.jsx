import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import MainBody from "../MainBody/MainBody";
import Loading from "../../../Components/Loading/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const onPageLoad = () => {
      setIsLoading(false);
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Header />
      <MainBody />
    </>
  );
};

export default Home;
