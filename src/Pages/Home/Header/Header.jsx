import React from "react";
import styles from "./Header.module.css";
import { Container, Row, Col } from "react-bootstrap";

import headerDog from "../../../images/happy.png";
import circles from "../../../images/ricky-1511708186.png";
import MainButton from "./../../../Components/Ui/MainButton";

const Header = () => {
  return (
    <header className="position-relative  vh-75 d-flex align-items-center py-5 text-center">
      <div className={styles.header_circles}>
        <img src={circles} className="w-100" alt="circles-background" />
      </div>
      <Container fluid>
        <Row className={`${styles.header_rows}`}>
          <Col md={6} className="d-flex justify-content-center align-items-center flex-column">
            <h1 className={styles.title}>Treat Your Pets to the Finest Food!</h1>
            <MainButton text="Shop Now" />
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <div className={styles.header_img}>
              <img className="w-100" src={headerDog} alt="dog and cat" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
