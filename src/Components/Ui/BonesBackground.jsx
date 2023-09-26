import React from "react";
import styles from "./BonesBackground.module.css";
import bones from "../../images/cartoonbones1.png";

const BonesBackground = (props) => {
  const classes = props.dir === "left" ? styles.bones_bg : styles.bones_bg_right;

  return (
    <div className={classes}>
      <img src={bones} alt="bones" />
    </div>
  );
};

export default BonesBackground;
