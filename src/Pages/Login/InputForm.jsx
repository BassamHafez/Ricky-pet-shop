import React, { useEffect, useState } from "react";
import styles from "./InputForm.module.css";
import CommonButton from "../../Components/Ui/CommonButton";
import { Form, Link, useActionData, useSearchParams,useNavigation } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const InputForm = () => {
  const [error, setError] = useState({ email: "", password: "" });
  const [mainError, setMainError] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isEmail, setIsEmail] = useState("");

  const [searchParams] = useSearchParams();

  const navigation=useNavigation();
  let isSubmitting= navigation.state==='submitting';
  let isLogin = searchParams.get("mode") === "signin";

  const data = useActionData();

  const clearErrors = () => {
    setMainError("");
    setError({ email: "", password: "" });
    setIsEmail("");
    setIsPassword("");
  };
  const clearPasswordField = () => {
    setIsPassword("");
    setError({ email: "", password: error.password });
  };
  const clearEmailField = () => {
    setIsEmail("");
    setError({ email: error.email, password: "" });
  };




  useEffect(() => {
    if (data) {
      if (data.errors) {
        if (!data.errors.password) {
          setError({
            email: data.errors.email.message || "",
            password: "",
          });
          console.log("jjkjjjk");
          return;
        }
        setError({
          email: data.errors.email.message || "",
          password: data.errors.password.message || "",
        });
        return;
      }

      if (data.message) {
        setMainError(data.message);
        if (mainError.includes("password")) {
          setIsPassword(mainError);
        }
        if (mainError.includes("email")) {
          setIsEmail(mainError);
        }
        return;
      } else setIsEmail("");
      setIsPassword("");
    }
  }, [data, mainError]);

  return (
    <Form
      method="post"
      className={`${styles.form} ${!error.email && !error.password && "mt-5"} ${
        isLogin && "mt-5"}`}
    >
      <h3 className={styles.title}>{isSubmitting?'submitting...':isLogin ? "Login" : "Register"}</h3>
      <input
        type="email"
        name="email"
        className={`${
          (error.email || isEmail) && "is-invalid"
        } form-control ${isLogin?'mb-3':'mb-2'}`}
        placeholder="Your Email"
        onClick={clearEmailField}
      />
      {error.email && (
        <Alert className={`${styles.alert} ${isLogin&&'mb-3'}`} variant="primary">
          {error.email}
        </Alert>
      )}
      {isEmail && (
        <Alert className={`${styles.alert} ${isLogin&&'mb-3'}`} variant="primary">
          {isEmail}
        </Alert>
      )}
      <input
        type="password"
        name="password"
        className={`${
          (error.password || isPassword) && "is-invalid"
        } form-control ${isLogin?'mb-3':'mb-3'}`}
        placeholder="Enter Your Password"
        onClick={clearPasswordField}
      />
      {error.password && (
        <Alert className={`${styles.alert} ${isLogin&&'mb-3'}`} variant="primary">
          {error.password}
        </Alert>
      )}
      {isPassword && (
        <Alert className={`${styles.alert} ${isLogin&&'mb-3'}`} variant="primary">
          {isPassword}
        </Alert>
      )}
      {!isLogin && (
        <>
          <input
            type="name"
            name="first_name"
            className="form-control mb-2"
            placeholder="first_name"
          />
          <input
            type="name"
            name="last_name"
            className="form-control mb-2"
            placeholder="last_name"
          />
          <input
            type="age"
            name="age"
            className="form-control mb-3"
            placeholder="Your age"
          />
        </>
      )}
      <CommonButton
        text={isLogin ? "Login" : "Register"}
        btnType="one"
        width="full"
        onClick={clearErrors}
      />
      <span className="my-2">OR</span>
      <Link
        className="w-100 d-flex justify-content-center"
        to={`?mode=${isLogin ? "signup" : "signin"}`}
        onClick={clearErrors}
      >
        <CommonButton
          text={isLogin ? "Register" : "Login"}
          btnType="two"
          width="full"
        />
      </Link>
    </Form>
  );
};

export default InputForm;
