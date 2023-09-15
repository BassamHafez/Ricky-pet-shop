import React from 'react';
import styles from './CatCounters.module.css';

const CatCounters = (props) => {
  return (
    <div
    className={`${styles.counters} d-flex justify-content-evenly align-items-center`}
  >
    <div className={styles.counter_item}>
      <i className={`${styles.icons} fa-solid fa-brain`}></i>
      <span>{props.intelligence}</span>
      <p>intelligence</p>
    </div>
    <div className={styles.counter_item}>
      <i className={`${styles.icons} fa-solid fa-bolt`}></i>
      <span>{props.energy_level}</span>
      <p>energy</p>
    </div>
    <div className={styles.counter_item}>
      <i className={`${styles.icons} fa-solid fa-users`}></i>
      <span>{props.social_needs}</span>
      <p>social</p>
    </div>
    <div className={styles.counter_item}>
      <i
        className={`${styles.icons} fa-solid fa-arrows-spin`}
      ></i>
      <span className={styles.life_cat}>{props.life}</span>
      <p>life span</p>
    </div>
  </div>
  )
}

export default CatCounters
