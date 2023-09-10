import React, { useState } from "react";
import styles from "./CartButton.module.css";
import CartModal from "./CartModal";

const CartButton = () => {

  const [modalShow, setModalShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setModalShow(true);
  }

  return (
    <>
      <button
        title="show your cart"
        className={`${styles.cart_button} position-relative`}
        onClick={() => handleShow(true)}
        
      >
        <i className="fa-brands fa-opencart"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0
        </span>
      </button>

      <CartModal fullscreen={fullscreen} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default CartButton;
