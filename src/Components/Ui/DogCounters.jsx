import React from 'react'
import styles from './DogCounters.module.css';

const DogCounters = (props) => {
  return (
    <div
    className={`${styles.counters} d-flex justify-content-evenly align-items-center`}
  >
    <div className={styles.counter_item_dog}>
      <i className={`${styles.icons} fa-solid fa-left-right`}></i>
      <span>{props.width}</span>
      <p>width</p>
    </div>
    <div className={styles.counter_item_dog}>
      <i className={`${styles.icons} fa-solid fa-up-down`}></i>
      <span>{props.height}</span>
      <p>height</p>
    </div>
    <div className={styles.counter_item_dog}>
      <i className={`${styles.icons} fa-solid fa-weight-scale`}></i>
      <span>{props.weight_metric}</span>
      <p>weight</p>
    </div>
    <div className={styles.counter_item_dog}>
      <i
        className={`${styles.icons} fa-solid fa-arrows-spin`}
      ></i>
      <span className={styles.life_span}>{props.life}</span>
      <p>life span</p>
    </div>
  </div>
  )
}

export default DogCounters
