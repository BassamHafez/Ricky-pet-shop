import React from "react";
import styles from "./SandShape.module.css";
import gary from "../../images/Gary The Snail Love Sticker by Cartuna for iOS & Android _ GIPHY.gif";
import swim from "../../images/turtle.gif";

const SandShape = () => {
  return (
    <>
      <div className={styles.swim}>
        <img src={swim} alt="swimming turtle" className="w-100" />
      </div>
      <div className={styles.sand}>
        <div className={styles.snail}>
          <img src={gary} alt="gary the snail" className="w-100" />
        </div>
      </div>
    </>
  );
};

export default SandShape;
