import React from "react";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import CartItem from "../Cart/CartItem";
import styles from "./CartModal.module.css";
import NoItems from "./NoItems";

const CartModal = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={styles.body}>
        <div className={styles.close_btn}>
          <button onClick={props.onHide}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              src={item.src}
              quantity={item.quantity}
            />
          ))
        ) : (
          <NoItems onClick={props.onHide} />
        )}
        {cartItems.length > 0 && (
          <div className={styles.order_btn}>
            <button>Order</button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
