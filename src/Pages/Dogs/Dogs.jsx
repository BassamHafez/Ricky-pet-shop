import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import PetCard from "../../Components/Ui/PetCard";
import styles from "./Dogs.module.css";
import TypeButton from "./../../Components/Ui/TypeButton";

const Dogs = () => {
  const [cats, setCats] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios(
        `https://api.thedogapi.com/v1/images/search?limit=20&breed_ids=5,6,7,8&api_key=live_2KezZROYSVMIobsbx3rgXKK80nHNTjiwEeW2TezLDOCWKSIMuxp11MLd0wxnKCMD`
      );

      setCats(data);
      console.log(data)
    };

    fetchData();
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.hero_caption}>
          <h2>From Furry Friends to Family Members</h2>
          <TypeButton text="Shop Now" />
        </div>
      </div>
      <Container fluid>
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

export default Dogs;
