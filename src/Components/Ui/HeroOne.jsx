import React from 'react'
import styles from './HeroOne.module.css';
import TypeButton from './TypeButton';

const HeroOne = () => {
  return (
  <div className={styles.hero}>
    <div className={styles.hero_caption}>
      <h2>From Furry Friends to Family Members</h2>
      <TypeButton text="Shop Now" />
    </div>
  </div>
  )
}

export default HeroOne
