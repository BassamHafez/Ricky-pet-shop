import React from 'react';
import styles from './Header.module.css';
import { Container,Row,Col } from 'react-bootstrap';

import headerDog from '../../../images/happy.png';
import circles from '../../../images/ricky-1511708186.png';
import MainButton from './../../../Components/Ui/MainButton';

const Header = () => {
  return (
    <header className={styles.header}>
     <div className={styles.header_circles}><img src={circles} className='w-100' alt="circles-background" /></div>
      <Container fluid>
      <Row className={`${styles.header_rows} row justify-content-between`}>
        <Col md={6} className={styles.header_caption}>
          <h1>Treat Your Pets to the Finest Food!</h1>
          <MainButton text="Shop Now"/>
        </Col>
        <Col md={6}>
          <img src={headerDog} alt="dog and cat" />
        </Col>
      </Row>
      </Container>
    </header>
  )
}

export default Header
