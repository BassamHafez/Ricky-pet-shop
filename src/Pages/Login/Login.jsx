import React from "react";
import styles from "./Login.module.css";
import CommonButton from "../../Components/Ui/CommonButton";
import Particlesbg from "../../Components/Particles/Particlesbg";
import SandShape from "../../Components/Ui/SandShape";

const Login = () => {
  return (
    <div className={styles.container}>
      <Particlesbg />


      <form className={styles.form}>
        <h3 className={styles.title}>Login</h3>
        <input
          type="name"
          className="form-control mb-3"
          placeholder="Enter Your Name"
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter Your Password"
        />
        <CommonButton text="sign in" btnType="one" width="full" />
        <span className="my-3">OR</span>
        <CommonButton text="sign up" btnType="two" width="full" />
      </form>
        <SandShape/>
    </div>
  );
};

export default Login;
