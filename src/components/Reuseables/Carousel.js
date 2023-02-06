import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Carousel.module.css";
import pullman from "../../images/InStore/pullman_one.webp";
import pullmanTwo from "../../images/InStore/pullman_two.webp";
import pullmanThree from "../../images/InStore/pullman_three.webp";

const MyCarousel = () => {
  return (
    <div
      id="carouselExample"
      className={`carousel slide ${styles.carousel_main}`}
    >
      <div className={`carousel-inner ${styles.img_container}`}>
        <div className={`carousel-item active ${styles.img_container}`}>
          <img src={pullman} className="d-block w-100" alt="..." />
        </div>
        <div className={`carousel-item active ${styles.img_container}`}>
          <img src={pullmanTwo} className="d-block w-100" alt="..." />
        </div>
        <div className={`carousel-item active ${styles.img_container}`}>
          <img src={pullmanThree} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className={` ${styles.prev_btn}`}
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span
          className={`carousel-control-prev-icon ${styles.icon}`}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className={` ${styles.next_btn}`}
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span
          className={`carousel-control-next-icon ${styles.icon}`}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MyCarousel;
