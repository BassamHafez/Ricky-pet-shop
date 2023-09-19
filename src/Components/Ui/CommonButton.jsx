import React from "react";
import styles from "./CommonButton.module.css";

const CommonButton = (props) => {
  return (
    <>
      {props.btnType === 'one' ? (
        <button onClick={props.onClick} className={`${styles.btn_one} ${props.width==='full' && 'w-100' }`}>
          {props.text}
        </button>
      ) : (
        <button className={`${styles.btn_two} ${props.width==='full' && 'w-100' }`}>{props.text}</button>
      )}
    </>
  );
};

export default CommonButton;
