import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./SinglePet.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { cartActions } from "./../../Store/cart-slice";
import DogCounters from "../Ui/DogCounters";
import CatCounters from "../Ui/CatCounters";
import CommonButton from "../Ui/CommonButton";


const SinglePet = () => {

  const info = useSelector((state) => state.singlePet.data);
  const dispatch = useDispatch();
  const [isCat, setIsCat] = useState(true);

  const addSinglePetToCart = () => {
    dispatch(
      cartActions.addItemsToCart({
        id: info.id,
        name: info.name,
        src: info.src,
      })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (info.type === "dog") {
      setIsCat(false);
    } else {
      setIsCat(true);
    }
  }, [info]);

  return (
    <>
      <div
        className={styles.single_pet_container}
      >
        <Container fluid="lg">
          <Row className={`${styles.row} rounded overflow-hidden`}>
            <Col
              md={6}
              className={`${styles.img_side} d-flex flex-column justify-content-center align-items-center p-0`}
            >
              <div className={styles.pet_img}>
                <img
                  src={info.src}
                  className="w-100 h-100"
                  alt="Single Pet info"
                />
              </div>
              <div
                className={`${styles.reacts} d-flex justify-content-start align-items-center`}
              >
                <i
                  className={`${styles.reacts_love} fa-solid fa-heart mx-3`}
                ></i>
                <i
                  className={`${styles.reacts_comment} fa-solid fa-comment mx-3`}
                ></i>
                <i
                  className={`${styles.reacts_share} fa-solid fa-share mx-3`}
                ></i>
                {isCat?<span className="ms-auto">{info.country}</span>:<span className="ms-auto">{info.breed_group}</span>}
              </div>
            </Col>
            {isCat ? (
               //handle cat case
              <Col
                md={6}
                className=" px-0"
              >
                <div className={styles.caption}>
                  <div className={styles.header}>
                    <h2>{info.name}</h2>
                    <p>{info.desc}</p>
                    <div
                      className={`${styles.contacts} d-flex justify-content-end align-items-center mt-4 mb-2`}
                    >
                      <i className="fab fa-facebook mx-3"></i>
                      <i className="fab fa-pinterest mx-3"></i>
                      <i className="fab fa-twitter mx-3"></i>
                      <i className="fa-regular fa-envelope mx-3"></i>
                    </div>
                  </div>
                  <div
                    className={`${styles.urls} d-flex justify-content-evenly align-items-center mt-2`}
                  >
                    <a href={info.wiki} target="_blank" rel="noreferrer">
                      wikipedia
                    </a>
                    <a href={info.vcahospitals_url} target="_blank" rel="noreferrer" >vcahospitals</a>
                    <a href={info.vetstreet_url} target="_blank" rel="noreferrer">vetstreet</a>
                  </div>
                  <CatCounters intelligence={info.intelligence} energy_level={info.energy_level} social_needs={info.social_needs} life={info.life}/>
                  <div className="mt-3 text-center">
                    <CommonButton text='Add To Cart' onClick={addSinglePetToCart} btnType='one'  margin={true}/>
                    <CommonButton text='Order Now'  btnType='two'  margin={true}/>
                  </div>
                </div>
              </Col>
            ) : (
              //handle dog case
              <Col
                md={6}
                className=" px-0"
              >
                <div className={styles.caption}>
                  <div className={styles.header}>
                    <h2>{info.name}</h2>
                    <p>{info.temperament}</p>
                    <div
                      className={`${styles.contacts} d-flex justify-content-end align-items-center mt-4 mb-2`}
                    >
                      <i className="fab fa-facebook mx-3"></i>
                      <i className="fab fa-pinterest mx-3"></i>
                      <i className="fab fa-twitter mx-3"></i>
                      <i className="fa-regular fa-envelope mx-3"></i>
                    </div>
                  </div>
                  <div>
                    <span className={styles.breed_for}>{info.bred_for}</span>
                  </div>
                  <DogCounters width={info.width} height={info.height} weight_metric={info.weight_metric} life={info.life}/>
                  <div className="mt-3 text-center">
                    <CommonButton text='Add To Cart' onClick={addSinglePetToCart} btnType='one' margin={true}/>
                    <CommonButton text='Order Now'  btnType='two'  margin={true}/>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SinglePet;
