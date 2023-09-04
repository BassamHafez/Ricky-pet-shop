import React from 'react';
import styles from './CartButton.module.css';

const CartButton = () => {
  return (
    <button className={styles.cart_button}>
      <i className="fa-brands fa-opencart"></i>
    </button>
  )
}

export default CartButton
