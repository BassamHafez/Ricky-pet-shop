import React from 'react';
import styles from './Loading.module.css';
import loadingImg from '../../images/Yuki Neko Animated Stickers.gif';

const Loading = () => {
  return (
    <div className={styles.loading_layer}>
       <img src={loadingImg} alt="loading" />
    </div>
  )
}

export default Loading
