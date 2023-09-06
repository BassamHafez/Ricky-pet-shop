import React,{useEffect,useState} from "react";
import { Container,Row } from "react-bootstrap";
import PetCard from "../../Components/Ui/PetCard";


const Cats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_O1P6WzQTUCef1gD2qfZr2svMlVjslOIoiy9X8P01ZSpM9ZKPCQpWO5FUtta8yN3h');
      const res = await response.json();
      setData(res);
    };

    fetchData();
  }, []);

  return (
    <Container className="my-5">
      <Row>
         {data.map((cat) =>  {return <PetCard key={cat.id} id={cat.id} name={cat.breeds[0].name} src={cat.url} wiki={cat.breeds[0].wikipedia_url}/>} )}
      </Row>
    </Container>
  );
};

export default Cats;