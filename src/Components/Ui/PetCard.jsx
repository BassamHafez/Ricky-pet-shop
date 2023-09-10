import React from 'react';
import { Col } from 'react-bootstrap';
import styles from './PetCard.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';

const PetCard = (props) => {

  const dispatch = useDispatch();

  const addToCartHandler=()=>{
    dispatch(cartActions.addItemsToCart({
      id:props.id,
      name:props.name,
      src:props.src
    }));
  }

  return (
    <Col sm={6} md={4} lg={3} className={styles.card} key={props.id}>
        <div className={styles.card_content}>
            <div className={styles.card_img}>
                <img src={props.src} alt={props.name} />
            </div>
            <div className={styles.card_caption}>
                <h5>{props.name}</h5>
                <p  className={styles.life}><span>life_span </span>: {props.life}</p>
                <p className={styles.temperament} >{props.temperament}</p>
                <button onClick={addToCartHandler} title='add to cart'  className={styles.card_cart}><i className="fa-solid fa-cart-plus"></i></button>
                <button  title='quick view' className={styles.card_eye}><i className="fa-solid fa-eye"></i></button>
                <button  title='add to wishlist' className={styles.card_wish}><i className="fa-regular fa-heart"></i></button>
            </div>
        </div>
    </Col>
  )
}

export default PetCard
