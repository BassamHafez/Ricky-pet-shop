import React from "react";
import styles from "./NoItems.module.css";
import CommonButton from "./CommonButton";
import { Link } from "react-router-dom";

const NoItems = (props) => {
  return (
    <div className={styles.container}>
      <h2>You Don't have any Items Yet !</h2>
      <div className="d-flex justify-content-center mt-5">
        <Link onClick={props.onClick} to='cats'><CommonButton margin={true} btnType="one" text="Order Cats" /></Link>
        <Link onClick={props.onClick} to='dogs'><CommonButton margin={true} btnType="two" text="Shop Dogs" /></Link>
      </div>
    </div>
  );
};

export default NoItems;
