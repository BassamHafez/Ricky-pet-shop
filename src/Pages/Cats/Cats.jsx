import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import PetCard from "../../Components/Ui/PetCard";
import styles from "./Cats.module.css";
import TypeButton from "./../../Components/Ui/TypeButton";
import Loading from "../../Components/Loading/Loading";
const Cats = () => {
  const [cats, setCats] = useState([]);
  const [selected, setSelected] = useState(
    "asho,bslo,bsho,Birm,Bali,Cymr,Char,Khao,aege"
  );
  const [isLoading,setIsLoading]=useState(false);


  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      let { data } = await axios(
        `https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=${selected}&api_key=live_O1P6WzQTUCef1gD2qfZr2svMlVjslOIoiy9X8P01ZSpM9ZKPCQpWO5FUtta8yN3h`
      );

      setCats(data);
      setIsLoading(false);

    };
    fetchData();
  }, [selected]);

  const setSelectedHandler = (e) => {
    let type = e.target.value;
    setSelected(type);
  };

  return (
    <div className={styles.container}>
      {isLoading&&<Loading/>}
      <div className={styles.hero}>
        <div className={styles.hero_caption}>
          <h2>From Furry Friends to Family Members</h2>
          <TypeButton text="Shop Now" />
        </div>
      </div>
      <Container fluid className='px-lg-5'>

        <div className={`${styles.select_type} my-5`}>
          <select name="cats" id="cats" onChange={setSelectedHandler}>
            <option value="asho,bslo,bsho,Birm,Bali,Cymr,Char,Khao,aege">All Breeds</option>
            <option value="asho">American Shorthair</option>
            <option value="bslo">British Longhair</option>
            <option value="bsho">British Shorthair</option>
            <option value="Cymr">Cymric</option>
            <option value="Abyssinian">Abyssinian</option>
            <option value="Bali">Balinese</option>
            <option value="Birm">Birman</option>
            <option value="Char">Chartreux</option>
            <option value="Khao">Khao Manee</option>
            <option value="aege">Aegean</option>
          </select>
        </div>
        <Row className="mt-5 px-lg-5">
          {cats.map((cat) => {
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
                type='cat'
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Cats;
