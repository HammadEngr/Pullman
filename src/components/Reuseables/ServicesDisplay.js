import React from "react";
import styles from "./ServicesDisplay.module.css";
const ServicesDisplay = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <div className={styles.wheel_container}>
        <div className={styles.icon_container}>
          <img src={props.data.icon} />
        </div>
        <div className={styles.wheel}></div>
      </div>
      <h1 className={styles.service}>{props.data.service}</h1>
      <p className={styles.description}>{props.data.description}</p>
    </div>
  );
};

export default ServicesDisplay;
