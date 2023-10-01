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
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      {isLoading && <Loading />}
      <Header />
      <MainBody />
    </>
  );
};

export default Home;
