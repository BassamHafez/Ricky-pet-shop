import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import PetCard from "../../Components/Ui/PetCard";
import styles from "./Dogs.module.css";
import TypeButton from "./../../Components/Ui/TypeButton";
import Loading from "../../Components/Loading/Loading";

const Dogs = () => {
  const [dogs, setdogs] = useState([]);
  const [selected, setSelected] = useState("1,3,4,5,6,7,8,9,10,11");
  const [isLoading,setIsLoading]=useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      let { data } = await axios(
        `https://api.thedogapi.com/v1/images/search?limit=30&breed_ids=${selected}&api_key=live_2KezZROYSVMIobsbx3rgXKK80nHNTjiwEeW2TezLDOCWKSIMuxp11MLd0wxnKCMD`
        );

      setdogs(data);
      setIsLoading(false);
    };

    fetchData();
  }, [selected]);

  const setSelectedHandler =(e)=>{
    let type = e.target.value;
    setSelected(type);
  }

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
          <select name="dogs" id="dogs" onChange={setSelectedHandler}>
            <option value="1,3,4,5,6,7,8,9,10,11">All Breeds</option>
            <option value="1">American Shorthair</option>
            <option value="2">British Longhair</option>
            <option value="3">British Shorthair</option>
            <option value="4">Cymric</option>
            <option value="5">Abyssinian</option>
            <option value="6">Balinese</option>
            <option value="7">Birman</option>
            <option value="8">Chartreux</option>
            <option value="9">Khao Manee</option>
            <option value="10">Aegean</option>
          </select>
        </div>
        <Row className="mt-5 px-lg-5">
          {dogs.map((dog) => {
            return (
              <PetCard
                key={dog.id}
                id={dog.id}
                name={dog.breeds[0].name}
                src={dog.url}
                wiki={dog.breeds[0].wikipedia_url}
                temperament={dog.breeds[0].temperament}
                life={dog.breeds[0].life_span}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Dogs;

