import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Container, Row } from "react-bootstrap";
import PetCard from "../../Components/Ui/PetCard";
import styles from "./Dogs.module.css";
import Loading from "../../Components/Loading/Loading";
import DogsSelection from "../../Components/Ui/DogsSelection";
import Error from "./../../Components/Error/Error";
import CarouselFade from "../../Components/Ui/CarouselFade";
import { fetchDogsData } from "../../Util/Http";
import LoadingPlaceholder from "../../Components/Ui/LoadingPlaceholder";

const Dogs = () => {
  const allDogs =
    "1,5,6,7,8,9,10,12,13,14,18,19,23,24,101,103,111,114,121,124,125,130";

  const [selected, setSelected] = useState(allDogs);

  const setSelectedHandler = (e) => {
    let type = e.target.value;
    setSelected(type);
  };

  const { data, isPending, isError, isFetching, refetch } = useQuery({
    queryKey: ["dogs"],
    queryFn: ({ signal }) => fetchDogsData({ signal, selected }),
    staleTime:10000
  });


  useEffect(() => {
    if (selected) {
      refetch();
    }
  }, [selected, refetch]);

  return (
    <>
      {isPending && <Loading />}
      {isError && (
        <Error
          nav={false}
          text="couldn't fetch resources or data please try again later"
        />
      )}
      <div className={styles.container}>
        <CarouselFade />
        <Container fluid className="px-lg-5">
          <DogsSelection
            name="dogType"
            runSelectHandler={setSelectedHandler}
            allDogs={allDogs}
          />
          <Row className="mt-5 px-lg-5">
            {isFetching ? (
              <>
                <LoadingPlaceholder />
                <LoadingPlaceholder />
                <LoadingPlaceholder />
                <LoadingPlaceholder />
                <LoadingPlaceholder />
                <LoadingPlaceholder />
              </>
            ) : (
              data &&
              data.map((dog) => {
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
              })
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dogs;
