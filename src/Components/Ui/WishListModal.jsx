import React, { useState,useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import CartItem from "../Cart/CartItem";
import { useSelector } from "react-redux";
import styles from "./WishListModal.module.css";
import Loading from "../Loading/Loading";

const WishListModal = (props) => {
  const wishItems = useSelector((state) => state.wish.items);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    let clr = setTimeout(() => {
      setIsLoading(true);
  
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
  
    }, 0);
  
    return () => clearTimeout(clr);
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={styles.body}>
        {isLoading && <Loading />}
        <div className={styles.close_btn}>
          <button onClick={props.onHide}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
        {wishItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              src={item.src}
              quantity={item.quantity}
              wishList="wishList"
            />
        ))}

        <div className={styles.order_btn}>
          <button>Order</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default WishListModal;
