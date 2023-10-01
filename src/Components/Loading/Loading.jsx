import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading_layer}>
      <div className=' d-flex justify-content-center align-items-center mb-5'>
        <i className={`${styles.dog} fa-solid fa-shield-dog fa-shake fa-4x mx-4`}></i>
        <i className={`${styles.cat} fa-solid fa-shield-cat fa-shake fa-4x mx-4`}></i>
      </div>
       <h3 className='fa-beat-fade'>Loading....</h3>
    </div>
  )
}

export default Loading
