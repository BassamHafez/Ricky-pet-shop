import React, { useEffect, useMemo, useState } from "react";
import { Container, Row } from "react-bootstrap";
import PetCard from "../../Components/Ui/PetCard";
import styles from "./Cats.module.css";
import Loading from "../../Components/Loading/Loading";
import HeroOne from "../../Components/Ui/HeroOne";
import DogsSelection from "../../Components/Ui/DogsSelection";
import Error from "../../Components/Error/Error";
import { useQuery } from "@tanstack/react-query";
import { fetchCatsData } from "../../Util/Http";
import LoadingPlaceholder from "../../Components/Ui/LoadingPlaceholder";

const Cats = () => {
  const allCats = "asho,bslo,bsho,Birm,Bali,Cymr,Char,Khao,aege";

  const [selected, setSelected] = useState(allCats);

  const setSelectedHandler = (e) => {
    let type = e.target.value;
    setSelected(type);
  };

  const { data, isPending, isError, isFetching, refetch } = useQuery({
    queryKey: ["cats"],
    queryFn: ({ signal }) => fetchCatsData({ signal, selected }),
    staleTime: 10000,
  });

  useEffect(() => {
    if (selected) {
      refetch();
    }
  }, [selected, refetch]);

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  const loadingMemo = useMemo(() => <LoadingPlaceholder />, []);
  const selectionMemo = useMemo(
    () => (
      <DogsSelection
        name="catType"
        runSelectHandler={setSelectedHandler}
        allCats={allCats}
      />
    ),
    []
  );
      
  return (
    <>
      {isError ? (
        <Error
          nav={false}
          text="couldn't fetch resources or data please try again later"
        />
      ) : (
        <div className={styles.container}>
          {isPending && <Loading />}
          <HeroOne />
          <Container fluid className="px-lg-5">
            {selectionMemo}
            <Row className="mt-5 px-lg-5">
              {isFetching ? (
                <>
                  {loadingMemo}
                  {loadingMemo}
                  {loadingMemo}
                  {loadingMemo}
                  {loadingMemo}
                </>
              ) : (
                data &&
                data.map((cat) => {
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
                })
              )}
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default Cats;
