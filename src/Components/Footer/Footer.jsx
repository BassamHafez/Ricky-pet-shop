import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={`${styles.footer} d-flex align-items-center`}>
      <div className={`${styles.footer_caption} px-5 d-flex flex-column align-items-center justify-content-center`}>
        <h2 className="text-center mb-5">
         keep your pet happy and comfortable.
        </h2>
        <h4 className="mb-3">Contact Us</h4>
        <div className={`${styles.social} d-flex mb-5`}>
          <i className="fab fa-facebook fa-2x mx-4"></i>
          <i className="fab fa-youtube  fa-2x mx-4"></i>
          <i className="fab fa-twitter  fa-2x mx-4"></i>
          <i className="fab fa-instagram  fa-2x mx-4"></i>
          <i className="fab fa-tiktok  fa-2x mx-4"></i>
        </div>
        <p>© 2023 Beso Theme. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
