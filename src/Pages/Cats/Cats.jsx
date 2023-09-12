import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import PetCard from "../../Components/Ui/PetCard";
import styles from "./Cats.module.css";
import TypeButton from "./../../Components/Ui/TypeButton";

const Cats = () => {
  const [cats, setCats] = useState([]);
  const [selected, setSelected] = useState(
    "asho,bslo,bsho,Birm,Bali,Cymr,Char,Khao,aege"
  );

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios(
        `https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=${selected}&api_key=live_O1P6WzQTUCef1gD2qfZr2svMlVjslOIoiy9X8P01ZSpM9ZKPCQpWO5FUtta8yN3h`
      );

      setCats(data);
      console.log(data)
    };

    fetchData();
  }, [selected]);

  const setSelectedHandler = (e) => {
    let type = e.target.value;
    setSelected(type);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.hero_caption}>
          <h2>From Furry Friends to Family Members</h2>
          <TypeButton text="Shop Now" />
        </div>
      </div>
      <Container>
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
        <Row className="p-5">
          {cats.map((cat) => {
            return (
              <PetCard
                key={cat.id}
                id={cat.id}
                name={cat.breeds[0].name}
                src={cat.url}
                wiki={cat.breeds[0].wikipedia_url}
                temperament={cat.breeds[0].temperament}
                life={cat.breeds[0].life_span}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Cats;
