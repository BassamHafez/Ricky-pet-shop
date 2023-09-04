import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from './MainBody.module.css';
import MainButton from '../../../Components/Ui/MainButton';

import cat from '../../../images/ricky-1502008994.png'
const MainBody = () => {
  return (
    <>
        <section className={`${styles.first_sec} my-5`}>
            <Container fluid>
                <Row>
                    <Col md={4} className={`${styles.first_sec_item_fish}`}><h2>Satisfy Your Fish With Quality Food!</h2></Col>
                    <Col md={4} className={`${styles.first_sec_item_rabbit}`}><h2>Save Big, Make Pets Wiggle and Giggle!</h2></Col>
                    <Col md={4} className={`${styles.first_sec_item_bird}`}><h2>Enjoy Discounts Or Nutritious Bird Food!</h2></Col>
                </Row>
            </Container>
        </section> 

        <section className={`${styles.second_sec} mb-5`}>
            <Container fluid>
            <Row className={`${styles.second_sec_rows} row justify-content-evenly`}>
                <Col md={6}>
                    <img src={cat} alt="cat" />
                </Col>
                <Col md={6} className={styles.second_sec_caption}>
                     <h2>Personalized Pet Food</h2>
                     <h4>A Monthly Subscription Tailored to Your Pet's Unique Tastes and Needs</h4>
                     <h6>Starts from $19/month</h6>
                     <MainButton text="View Plans"/>
                </Col>
            </Row>
            </Container>
        </section>
    </>
  )
}

export default MainBody
