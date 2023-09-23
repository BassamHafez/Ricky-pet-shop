import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import PetCard from "../../Components/Ui/PetCard";
import styles from "./Dogs.module.css";
import Loading from "../../Components/Loading/Loading";
import HeroOne from "../../Components/Ui/HeroOne";
import DogsSelection from "../../Components/Ui/DogsSelection";
import Error from "./../../Components/Error/Error";
import CarouselFade from "../../Components/Ui/CarouselFade";

const Dogs = () => {

  const [newError, setNewError] = useState(false);
  const [dogs, setdogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const allDogs =
    "1,5,6,7,8,9,10,12,13,14,18,19,23,24,101,103,111,114,121,124,125,130";
    const [selected, setSelected] = useState(allDogs);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios(
          `https://api.thedogapi.com/v1/images/search?limit=21&breed_ids=${selected}&api_key=live_2KezZROYSVMIobsbx3rgXKK80nHNTjiwEeW2TezLDOCWKSIMuxp11MLd0wxnKCMD`
        );

        if (response.status===200) {
          setdogs(response.data);
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

  const setSelectedHandler = (e) => {
    let type = e.target.value;
    setSelected(type);
  };

  return (
    <>
      {newError ? (
        <Error nav={false}/>
      ) : (
        <div className={styles.container}>
          {isLoading && <Loading />}
          <CarouselFade/>
          <Container fluid className="px-lg-5">
            <DogsSelection
              name="dogType"
              runSelectHandler={setSelectedHandler}
              allDogs={allDogs}
            />
            <Row className="mt-5 px-lg-5">
              {dogs &&
                dogs.map((dog) => {
                  return (
                    <PetCard
                      key={dog.id}
                      id={dog.id}
                      name={dog.breeds[0].name}
                      src={dog.url}
                      height={dog.height}
                      width={dog.width}
                      weight_imperial={dog.breeds[0].weight.imperial}
                      weight_metric={dog.breeds[0].weight.metric}
                      temperament={dog.breeds[0].temperament}
                      bred_for={dog.breeds[0].bred_for}
                      breed_group={dog.breeds[0].breed_group}
                      life={dog.breeds[0].life_span}
                      type="dog"
                    />
                  );
                })}
            </Row>
          </Container>
        </div>
      )}{" "}
    </>
  );
};

export default Dogs;
