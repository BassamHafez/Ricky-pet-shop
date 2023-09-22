import React, { useState } from "react";
import styles from "./WishListIcon.module.css";
import WishListModal from "./WishListModal";
import { useSelector } from "react-redux";
import ConfirmationModal from "./ConfirmationModal";
import { useRouteLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const WishListIcon = () => {
  const [show, setShow] = useState(false);
  const totalWishQuantity = useSelector((state) => state.wish.totalQuantity);
  const [modalShow, setModalShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const token = useRouteLoaderData("root");
  let navigate = useNavigate();

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setModalShow(true);
  }

  const navigateToLoginPage = () => {
    setShow(false);
    navigate("/login?mode=signin");
  };

  const handleConfirmationShow = () => setShow(true);
  const handleConfirmationClose = () => setShow(false);

  return (
    <>
      <button
        title="your wishlist"
        className={`${styles.wishlist} position-relative`}
        onClick={token ? () => handleShow(true) : handleConfirmationShow}
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
      <ConfirmationModal
        pageType='login'
        onClick={navigateToLoginPage}
        handleClose={handleConfirmationClose}
        show={show}
      />
    </>
  );
};

export default WishListIcon;
