import React from 'react';
import styles from './MainButton.module.css';

const MainButton = (props) => {
  return (
    <button className={styles.main_button} type={props.type} onClick={props.onClick}> 
      <div className={styles.main_layer_button}></div>  
        {props.text}
    </button>
  )
}

export default MainButton
