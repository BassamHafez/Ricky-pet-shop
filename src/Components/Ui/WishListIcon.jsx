import React from 'react'
import styles from './WishListIcon.module.css';

const WishListIcon = () => {
  return (
    <button className={styles.wishlist}>
        <i className="fa-solid fa-heart"></i>
    </button>
  )
}

export default WishListIcon
