import React from "react";
import styles from "./MainCarousel.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../../images/chevron.png";
import pullmanBGOne from "../../../images/pullman_one.webp";
import pullmanBGTwo from "../../../images/pullman_two.webp";

const MainCarousel = (props) => {
  const [curSlide, setCusSlide] = useState(0);
  const source = [
    {
      title: "New",
      heading: "Running Sneakers",
      subheading: "Men's like plex",
      imgUrl: pullmanBGOne,
    },
    {
      title: "Sale",
      heading: "Casual Sneakers",
      subheading: "Feels like air",
      imgUrl: pullmanBGTwo,
    },
  ];
  const maxSlide = source.length;
  const nextSlide = () => {
    if (curSlide < maxSlide - 1) setCusSlide((prev) => prev + 1);
    if (curSlide === maxSlide - 1) setCusSlide(0);
  };
  const prevSlide = () => {
    if (curSlide > 0) setCusSlide((prev) => prev - 1);
    if (curSlide === 0) setCusSlide(maxSlide - 1);
  };
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <div className={styles.slider}>
        {source.map((src, i) => (
          <div
            className={styles.img_container}
            style={{
              backgroundImage: `url(${src.imgUrl})`,
              transform: `translateX(${100 * (i - curSlide)}%)`,
            }}
            key={`${Math.random()}MAIN-CAR${i}`}
          >
            <h1 className={styles.title}>{src.title}</h1>
            <h1 className={styles.heading}>
              {src.heading} <br></br>
              {src.subheading}
            </h1>
            <button className={styles.shop_now}>
              <Link to="/shop">Shop Now</Link>
            </button>
          </div>
        ))}
      </div>
      <button className={styles.left_btn} onClick={prevSlide}>
        <img src={arrow} className={styles.left_arrow} />
      </button>
      <button className={styles.right_btn} onClick={nextSlide}>
        <img src={arrow} className={styles.right_arrow} />
      </button>
    </div>
  );
};

export default MainCarousel;
