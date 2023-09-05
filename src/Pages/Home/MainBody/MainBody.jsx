import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./MainBody.module.css";
import MainButton from "../../../Components/Ui/MainButton";
import Swipper from "../../../Components/Swipper/Swipper";

import cat from "../../../images/ricky-1502008994.png";
import dogType from "../../../images/ricky-1502288440.png";
import catType from "../../../images/ricky-1608825252.png";
import fishType from "../../../images/ricky-1502182557.png";
import mouseType from "../../../images/ricky-1502065222.png";
import reptilesType from "../../../images/ricky-1502869541.png";
import birdType from "../../../images/ricky-1502322429.png";
import babyCute from "../../../images/ricky-1655285879.png";

const MainBody = () => {
  return (
    <>
      <section className={`${styles.first_sec} my-5`}>
        <Container fluid>
          <Row>
            <Col md={4} className={`${styles.first_sec_item_fish}`}>
              <h2>Satisfy Your Fish With Quality Food!</h2>
            </Col>
            <Col md={4} className={`${styles.first_sec_item_rabbit}`}>
              <h2>Save Big, Make Pets Wiggle and Giggle!</h2>
            </Col>
            <Col md={4} className={`${styles.first_sec_item_bird}`}>
              <h2>Enjoy Discounts Or Nutritious Bird Food!</h2>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles.second_sec} mb-5`}>
        <Container fluid>
          <Row
            className={`${styles.second_sec_rows} row justify-content-evenly`}
          >
            <Col md={6}>
              <img src={cat} alt="cat" />
            </Col>
            <Col md={6} className={styles.second_sec_caption}>
              <h2>Personalized Pet Food</h2>
              <h4>
                A Monthly Subscription Tailored to Your Pet's Unique Tastes and
                Needs
              </h4>
              <h6>Starts from $19/month</h6>
              <MainButton text="View Plans" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles.third_sec} mb-5`}>
        <Container fluid className="p-5">
          <Row>
            <Col className={`${styles.pet_types} p-5 `} sm={6} md={4}>
              <img src={dogType} alt="dogs" />
              <h3>Dogs</h3>
            </Col>
            <Col className={`${styles.pet_types} p-5 `} sm={6} md={4}>
              <img src={catType} alt="cats" /> <h3>Cats</h3>
            </Col>
            <Col className={`${styles.pet_types} p-5 `} sm={6} md={4}>
              <img src={fishType} alt="fish" /> <h3>Fish</h3>
            </Col>
            <Col className={`${styles.pet_types} p-5 `} sm={6} md={4}>
              <img src={mouseType} alt="mouse" /> <h3>Small Pets</h3>
            </Col>
            <Col className={`${styles.pet_types} p-5 `} sm={6} md={4}>
              <img src={reptilesType} alt="reptiles" /> <h3>Reptiles</h3>
            </Col>
            <Col className={`${styles.pet_types} p-5 `} sm={6} md={4}>
              <img src={birdType} alt="birds" /> <h3>Birds</h3>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles.fourth_sec} mb-5`}>
        <div className={styles.fourth_sec_title}>
          <h2>Testimonials</h2>
        </div>

        <Container fluid>
          <Row className="align-items-center">
            <Col md={6}>
              <div
                className={`${styles.review} d-flex justify-content-center align-items-center`}
              >
                <div>
                  <div className="d-flex justify-content-center align-items-center">
                    <form className="d-flex flex-column justify-content-center align-items-center">
                      <input
                        className={`${styles.suggetions_input} mb-2`}
                        name="name"
                        type="text"
                        placeholder="Name"
                      />
                      <textarea
                        className={`${styles.suggetions_textarea} mb-2`}
                        name="suggetions"
                        id="suggetions"
                        cols="50"
                        rows="10"
                        placeholder="write here"
                      ></textarea>
                      <MainButton text="Send" type="submit" />
                    </form>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <Swipper />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles.second_sec} mb-5`}>
        <Container fluid>
          <Row
            className={`${styles.second_sec_rows} row justify-content-evenly`}
          >
            <Col md={6} className={styles.second_sec_caption}>
              <h2>Groomed to Perfection</h2>
              <h4>
              Trust Our Experts to Keep Your Pet Looking and Feeling their Best!
              </h4>
              <h6>Starts from $29</h6>
              <MainButton text="View Service" />
            </Col>
            <Col md={6}>
              <img src={babyCute} alt="dog" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MainBody;
