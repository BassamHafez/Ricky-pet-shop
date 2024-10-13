import React from "react";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import CartItem from "../Cart/CartItem";
import styles from "./CartModal.module.css";
import NoItems from "./NoItems";
import mainBg from "../../images/cartModalbg.jpg";
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
        <div className={styles.layer}></div>
        <img className={styles.mainBg} src={mainBg} alt="mainBg" />
        <div className={styles.close_btn}>
          <button onClick={props.onHide}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
        <div className={styles.contetn} >
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
            <div className={styles.no_items}>
              <NoItems onClick={props.onHide} />
            </div>
          )}
        </div>

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
