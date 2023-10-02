import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from './ConfirmationModal.module.css';
import CommonButton from "./CommonButton";


const ConfirmationModal = (props) => {

  const isLogin=props.pageType==='login';
  return (
    <Modal show={props.show} onHide={props.handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.title}>{isLogin?'Login or Register ':'Logout!'}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body_content}>Ooops! {isLogin?'you need to Login or Register ':'Are you sure you want to log out?'}</Modal.Body>
      <Modal.Footer>
        <CommonButton btnType='one' text='Close' onClick={props.handleClose}/>
        <CommonButton btnType='two' text={isLogin?'Login':'logout'} onClick={props.onClick}/>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
