import React from "react";
import styles from "./CartItem.module.css";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';

const CartItem = (props) => {
  
  const dispatch= useDispatch();

  const addItemHandler=()=>{
    dispatch(cartActions.addItemsToCart({
      id:props.id,
    }))
  }
  const id =props.id
  const removeItemHandler=()=>{
    dispatch(cartActions.removeItemFromCart(id))
  }

  return (
    <div className={`${styles.item_container} d-flex`}>
      <div className={styles.item_img}>
        <img src={props.src} className="w-100" alt="img" />
      </div>
      <div className={styles.item_caption}>
        <h4 className={styles.item_title}>{props.name}</h4>
        <div className={styles.item_controls}>
          <button onClick={removeItemHandler} className={styles.item_controls_plmi}>-</button>
          <span>{props.quantity}</span>
          <button onClick={addItemHandler} className={styles.item_controls_plmi}>+</button>
        </div>
        <button className={styles.item_bin}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button className={styles.item_share}>
          <i className="fa-solid fa-share"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
