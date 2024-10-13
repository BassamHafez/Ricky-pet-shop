import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./CarouselFadeExample.module.css";
import MainButton from "./MainButton";
import carosImag from "../../images/bg1.jpg";
import firstImage from "../../images/slide-element1.png";
import secondtImage from "../../images/slide-element2.png";
import thirdImage from "../../images/slide-element3.png";

const CarouselFade = () => {
  return (
    <Carousel fade className={styles.caros}>
      <Carousel.Item className={styles.caros_item}>
        <div className={styles.caros_layer}></div>
        <img src={carosImag} alt="carousel bg" />
        <div className={styles.slide_img}>
          <img src={firstImage} className="w-100" alt="dog" />
        </div>
        <Carousel.Caption className={styles.caros_caption}>
          <h2>We Love Pets!</h2>
          <p>Ricky is the most popular pet shop around the world</p>
          <MainButton text="contact us" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.caros_item}>
        <div className={styles.caros_layer}></div>
        <img src={carosImag} alt="carousel bg" />
        <div className={styles.slide_img}>
          <img src={secondtImage} className="w-100" alt="cat" />
        </div>
        <Carousel.Caption className={styles.caros_caption}>
          <h2>
            Quality <br /> Services
          </h2>
          <p>
            We offer all the best quality services and products for your best
            friend.
          </p>
          <MainButton text="contact us" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.caros_item}>
        <div className={styles.caros_layer}></div>
        <img src={carosImag} alt="carousel bg" />
        <div className={styles.slide_img}>
          <img src={thirdImage} className="w-100" alt="dog" />
        </div>

        <Carousel.Caption className={styles.caros_caption}>
          <h2>
            Welcome to <br />
            Ricky
          </h2>
          <p>
            Petz is a fun HTML5 Pet Template with many elements for your Pet
            related website
          </p>
          <MainButton text="contact us" />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselFade;
