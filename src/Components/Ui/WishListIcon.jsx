import React, { useState } from "react";
import styles from "./WishListIcon.module.css";
import WishListModal from "./WishListModal";
import { useSelector } from "react-redux";

const WishListIcon = () => {
  const totalWishQuantity = useSelector(state=>state.wish.totalQuantity);
  const [modalShow, setModalShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setModalShow(true);
  }

  return (
    <>
      <button
        title="your wishlist"
        className={`${styles.wishlist} position-relative`}
        onClick={() => handleShow(true)}
      >
        <i className="fa-solid fa-heart"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
          {totalWishQuantity}
        </span>
      </button>
      <WishListModal
        fullscreen={fullscreen}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default WishListIcon;
