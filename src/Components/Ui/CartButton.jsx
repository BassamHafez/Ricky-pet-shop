import React from "react";
import styles from "./CartButton.module.css";

const CartButton = () => {
  return (
    <button type="button" className={`${styles.cart_button} position-relative`}>
       <i className="fa-brands fa-opencart"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
        <span className="visually-hidden">unread messages</span>
      </span>
    </button>
  );
};

export default CartButton;
