import React from "react";
import styles from "./TypeButton.module.css";

const TypeButton = (props) => {
  return <button className={styles.select_btn}>{props.text}</button>;
};

export default TypeButton;
