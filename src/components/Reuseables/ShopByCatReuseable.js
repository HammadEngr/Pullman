import React from "react";
import styles from "./ShopByCatReuseable.module.css";
import bgImg from "../../images/cat-bg.jpg";
import bgHover from "../../images/cat-hover.jpg";
import { useState } from "react";
const ShopByCatReuseable = (props) => {
  const [onHover, setOnHover] = useState(false);
  const hoverHandler = () => {
    setOnHover(true);
  };
  const noHoverHandler = () => {
    setOnHover(false);
  };
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div
      className={customClass}
      style={{
        backgroundImage: !onHover ? `url(${bgImg})` : `url(${bgHover})`,
      }}
      onMouseOver={hoverHandler}
      onMouseLeave={noHoverHandler}
    >
      <div>{props.data.title}</div>
      <div className={styles.image}>
        <img src={props.data.img} />
      </div>
      <button className={styles.shop_now}>Shop Now</button>
    </div>
  );
};

export default ShopByCatReuseable;
