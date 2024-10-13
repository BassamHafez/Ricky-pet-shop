import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./MainBody.module.css";
import MainButton from "../../../Components/Ui/MainButton";
import Swipper from "../../../Components/Swipper/Swipper";
import { Link } from "react-router-dom";
import cat from "../../../images/ricky-1502008994.png";
import dogType from "../../../images/ricky-1502288440.png";
import catType from "../../../images/ricky-1608825252.png";
import fishType from "../../../images/ricky-1502182557.png";
import mouseType from "../../../images/ricky-1502065222.png";
import reptilesType from "../../../images/ricky-1502869541.png";
import birdType from "../../../images/ricky-1502322429.png";
import babyCute from "../../../images/ricky-1655285879.png";
import BonesBackground from "../../../Components/Ui/BonesBackground";

const MainBody = () => {
  return (
    <>
      <section className={styles.first_sec}>
        <Container fluid>
          <Row className="justify-content-center">
            <Col
              md={6}
              lg={4}
              className="d-flex justify-content-center align-items-center my-3"
            >
              <div className={`${styles.first_sec_item_fish}`}>
                <h2>Satisfy Your Fish With Quality Food!</h2>
              </div>
            </Col>
            <Col
              md={6}
              lg={4}
              className="d-flex justify-content-center align-items-center my-3"
            >
              <div className={`${styles.first_sec_item_rabbit}`}>
                <h2>Save Big, Make Pets Wiggle and Giggle!</h2>
              </div>
            </Col>
            <Col
              md={6}
              lg={4}
              className="d-flex justify-content-center align-items-center my-3"
            >
              <div className={`${styles.first_sec_item_bird}`}>
                <h2>Enjoy Discounts Or Nutritious Bird Food!</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles.second_sec} my-5`}>
        <Container fluid>
          <Row>
            <Col className="d-flex justify-content-center" lg={6}>
              <div className={styles.cat_img}>
                <img className="w-100" src={cat} alt="cat" />
              </div>
            </Col>
            <Col lg={6} className={styles.second_sec_caption}>
              <h2>Personalized Pet Food</h2>
              <h4>
                A Monthly Subscription Tailored to Your Pet's Unique Tastes and
                Needs
              </h4>
              <h6>
                Starts from 20$
                <span className="text-secondary fs-6">/month</span>
              </h6>
              <MainButton text="View Plans" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles.third_sec} mb-5`}>
        <BonesBackground dir="left" />
        <Container fluid className="p-5">
          <Row>
            <Col className={`${styles.pet_types} p-5 `} sm={6} md={4}>
              <Link to="dogs">
                <div className={styles.sec3_img}>
                  <img className="w-100" src={dogType} alt="dogs" />
                </div>
              </Link>

              <h3>Dogs</h3>
            </Col>
            <Col className={`${styles.pet_types} p-5 `} sm={6} md={4}>
              <Link to="cats">
                <div className={styles.sec3_img}>
                  <img className="w-100" src={catType} alt="cats" />
                </div>
              </Link>
              <h3>Cats</h3>
            </Col>
            <Col className={`${styles.pet_types} p-5 `} sm={6} md={4}>
              <Link to="/">
                <div className={styles.sec3_img}>
                  <img className="w-100" src={fishType} alt="fishType" />
                </div>
              </Link>
              <h3>Fish</h3>
            </Col>
            <Col className={`${styles.pet_types} p-5 `} sm={6} md={4}>
              <Link to="/">
                <div className={styles.sec3_img}>
                  <img className="w-100" src={mouseType} alt="mouseType" />
                </div>
              </Link>
              <h3>Small Pets</h3>
            </Col>
            <Col className={`${styles.pet_types} p-5 `} sm={6} md={4}>
              <Link to="/">
                <div className={styles.sec3_img}>
                  <img className="w-100" src={reptilesType} alt="reptiles" />
                </div>
              </Link>
              <h3>Reptiles</h3>
            </Col>
            <Col className={`${styles.pet_types} p-5 `} sm={6} md={4}>
              <Link to="birds">
                <div className={styles.sec3_img}>
                  <img className="w-100" src={birdType} alt="birds" />
                </div>
              </Link>
              <h3>Birds</h3>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles.fourth_sec} mb-5`}>
        <BonesBackground dir="left" />
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
                Trust Our Experts to Keep Your Pet Looking and Feeling their
                Best!
              </h4>
              <h6>Starts from 29$</h6>
              <MainButton text="View Service" />
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <div className={styles.cat_img}>
                <img className="w-100" src={babyCute} alt="dog" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MainBody;
