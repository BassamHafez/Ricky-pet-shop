import React from "react";
import styles from "./CommonButton.module.css";

const CommonButton = (props) => {
  return (
    <>
      {props.btnType === 'one' ? (
        <button type={props.type} onClick={props.onClick} className={`${styles.btn_one} ${props.width==='full' && 'w-100' } ${props.margin&&'mx-4' }`}>
          {props.text}
        </button>
      ) : (
        <button onClick={props.onClick} className={`${styles.btn_two}  ${props.width==='full' && 'w-100' } ${props.margin&&'mx-4' }`}>{props.text}</button>
      )}
    </>
  );
};

export default CommonButton;
