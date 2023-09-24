import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import PetCard from "../../Components/Ui/PetCard";
import styles from "./Cats.module.css";
import Loading from "../../Components/Loading/Loading";
import HeroOne from "../../Components/Ui/HeroOne";
import DogsSelection from "../../Components/Ui/DogsSelection";
import Error from "../../Components/Error/Error";

const Cats = () => {
  const allCats = "asho,bslo,bsho,Birm,Bali,Cymr,Char,Khao,aege";
  const [cats, setCats] = useState([]);
  const [selected, setSelected] = useState(allCats);
  const [isLoading, setIsLoading] = useState(false);
  const [newError, setNewError] = useState(false);


  const setSelectedHandler = (e) => {
    let type = e.target.value;
    setSelected(type);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios(
          `https://api.thecatapi.com/v1/images/search?limit=21&breed_ids=${selected}&api_key=live_O1P6WzQTUCef1gD2qfZr2svMlVjslOIoiy9X8P01ZSpM9ZKPCQpWO5FUtta8yN3h`
        );
        if (response.status===200) {
          setCats(response.data);
          setNewError(false);
        } else {
          throw new Error("Couldn't fetch data well please try again later!");
        }
      } catch (error) {
        setNewError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [selected]);
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])


  return (
    <>
      {newError ? (
        <Error nav={false} text="couldn't fetch resources or data please try again later" />
      ) : (
        <div className={styles.container}>
          {isLoading && <Loading />}
          <HeroOne />
          <Container fluid className="px-lg-5">
            <DogsSelection
              name="catType"
              runSelectHandler={setSelectedHandler}
              allCats={allCats}
            />
            <Row className="mt-5 px-lg-5">
              {cats &&
                cats.map((cat) => {
                  return (
                    <PetCard
                      key={cat.id}
                      id={cat.id}
                      name={cat.breeds[0].name}
                      src={cat.url}
                      desc={cat.breeds[0].description}
                      country={cat.breeds[0].country_code}
                      wiki={cat.breeds[0].wikipedia_url}
                      vcahospitals_url={cat.breeds[0].vcahospitals_url}
                      vetstreet_url={cat.breeds[0].vetstreet_url}
                      temperament={cat.breeds[0].temperament}
                      life={cat.breeds[0].life_span}
                      adaptability={cat.breeds[0].adaptability}
                      intelligence={cat.breeds[0].intelligence}
                      social_needs={cat.breeds[0].social_needs}
                      energy_level={cat.breeds[0].energy_level}
                      type="cat"
                    />
                  );
                })}
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default Cats;
