import React from "react";
import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import styles from './ToastsAlert.module.css';

const ToastsAlert = (props) => {
  return (
    <ToastContainer className="p-3 position-fixed bottom-0 end-0" style={{ zIndex: 1 }}>
      <Toast
        onClose={props.onHideToastHandler}
        show={props.show}
        delay={2500}
        autohide
      >
        <Toast.Header className={styles.header}>
          <i
            className="fa-solid fa-circle-check me-2"
            style={{ color: "#59ff00" }}
          ></i>
          <strong className= "text-white me-auto">Item Added</strong>
          <small className="text-white">just now</small>
        </Toast.Header>
        <Toast.Body>Item {props.text} Successfully!</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastsAlert;
