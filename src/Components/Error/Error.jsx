import React from "react";
import styles from "./Error.module.css";
import Navs from "../Navs/Navs";
import { useRouteError } from "react-router-dom";

const Error = (props) => {

  let error = useRouteError();

  let title = "OOPS ! An error occured";
  let message = "unexpected error has been occured";

  if(error){
    if(error.status===404){
      title='OOPS ! An 404 error occured';
      message="You have tried to access a page that does not exist";
    }
    if(error.status===500){
      message=JSON.parse(error.data).message;
    }  
  }
  if(props.text){
    message=props.text;
  }

  return (
    <>
      {props.nav&&<Navs />}
      <div className={styles.container}>
        <h2>{title}</h2>
        <h6>{message}</h6>
      </div>
    </>
  );
};

export default Error;
