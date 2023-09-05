import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative,Autoplay } from "swiper/modules";
import styles from "./Swipper.module.css";

import person1 from "../../images/customer-1.jpg";
import person2 from "../../images/customer-img.jpg";
import person3 from "../../images/customer-img1.jpg";
import person4 from "../../images/testimonial-2.jpg";
import person5 from "../../images/testimonial-4.jpg";

const Swipper = () => {
  return (
    <>
      <Swiper
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
            reverseDirection:true
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative,Autoplay]}
        className={`${styles.Swiper_container} mySwiper`}
      >
        <SwiperSlide className={styles.slide}>
          <div className="d-flex align-items-center px-2">
            <img
              src={person1}
              className={`${styles.person} mx-2`}
              alt="person"
            />
            <div className="d-flex flex-column">
              <h5 className={`${styles.person_name} mx-2`}>Salim Ali</h5>
              <span className={`${styles.person_date} ms-3`}>2 weeks ago</span>
            </div>
          </div>
          <div className={styles.person_comment}>
            <p>
              Thank you for the friendly service at your shop yesterday. My new
              guinea pig Pepper seems very happy in her new habitat thanks to
              your care recommendations. Great selection and advice as always!
            </p>
          </div>
          <div className={styles.reacts}>
            <i className="fa-solid fa-thumbs-up mx-3"></i>
            <i className="fa-solid fa-comment mx-3"></i>
            <i className="fa-solid fa-heart mx-3"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className="d-flex align-items-center px-2">
            <img
              src={person2}
              className={`${styles.person} mx-2`}
              alt="person"
            />
            <div className="d-flex flex-column">
              <h5 className={`${styles.person_name} mx-2`}>Didi Ashraf</h5>
              <span className={`${styles.person_date} ms-3`}>jsut now</span>
            </div>
          </div>
          <div className={styles.person_comment}>
            <p>
              Thank you so much for the great customer service at your pet store
              last weekend. My puppy really enjoyed picking out his new toys.
              We'll be back soon!
            </p>
          </div>
          <div className={styles.reacts}>
            <i className="fa-solid fa-thumbs-up mx-3"></i>
            <i className="fa-solid fa-comment mx-3"></i>
            <i className="fa-solid fa-heart mx-3"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className="d-flex align-items-center px-2">
            <img
              src={person3}
              className={`${styles.person} mx-2`}
              alt="person"
            />
            <div className="d-flex flex-column">
              <h5 className={`${styles.person_name} mx-2`}>Salma Gamal</h5>
              <span className={`${styles.person_date} ms-3`}>1 year ago</span>
            </div>
          </div>
          <div className={styles.person_comment}>
            <p>
              We just wanted to send a quick note to say thanks for helping us
              find the perfect bowl and collar for our new kitten. She's
              settling in great with her new things.
            </p>
          </div>
          <div className={styles.reacts}>
            <i className="fa-solid fa-thumbs-up mx-3"></i>
            <i className="fa-solid fa-comment mx-3"></i>
            <i className="fa-solid fa-heart mx-3"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className="d-flex align-items-center px-2">
            <img
              src={person4}
              className={`${styles.person} mx-2`}
              alt="person"
            />
            <div className="d-flex flex-column">
              <h5 className={`${styles.person_name} mx-2`}>Mido Ghoniem</h5>
              <span className={`${styles.person_date} ms-3`}>2 month ago</span>
            </div>
          </div>
          <div className={styles.person_comment}>
            <p>
              Thanks to your staff for being so knowledgeable about fish care.
              We feel much more prepared for our new betta fish thanks to the
              advice we received.
            </p>
          </div>
          <div className={styles.reacts}>
            <i className="fa-solid fa-thumbs-up mx-3"></i>
            <i className="fa-solid fa-comment mx-3"></i>
            <i className="fa-solid fa-heart mx-3"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className="d-flex align-items-center px-2">
            <img
              src={person5}
              className={`${styles.person} mx-2`}
              alt="person"
            />
            <div className="d-flex flex-column">
              <h5 className={`${styles.person_name} ms-2`}>Jodi De Ana</h5>
              <span className={`${styles.person_date} ms-3`}>1 june 2023</span>
            </div>
          </div>
          <div className={styles.person_comment}>
            <p>
              Absley loved playing with all the little animals at your store on
              our visit last night. Thanks for giving her such a fun experience
              - it was lovely to shop at such a pet-friendly store.
            </p>
          </div>
          <div className={styles.reacts}>
            <i className="fa-solid fa-thumbs-up mx-3"></i>
            <i className="fa-solid fa-comment mx-3"></i>
            <i className="fa-solid fa-heart mx-3"></i>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipper;
