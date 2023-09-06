import React from 'react';
import { Col } from 'react-bootstrap';
import styles from './PetCard.module.css';

const PetCard = (props) => {
  return (
    <Col sm={6} md={3} className={styles.card} key={props.id}>
        <div className={styles.card_content}>
            <div className={styles.card_img}>
                <img src={props.src} alt={props.name} />
            </div>
            <div className={styles.card_caption}>
                <h3>{props.name}</h3>
                <button className={styles.card_button_one}>View</button>
                <button  className={styles.card_button_two} href={props.wiki}>wikipedia</button>
            </div>
        </div>
    </Col>
  )
}

export default PetCard
