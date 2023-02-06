import React from "react";
import styles from "./TimeDisplay.module.css";
const TimeDisplay = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <div className={styles.time}>
        <p>00</p>
        <p>Days</p>
      </div>
      <div className={styles.time}>
        <p>00</p>
        <p>Hour</p>
      </div>
      <div className={styles.time}>
        <p>00</p>
        <p>Min</p>
      </div>
      <div className={styles.time}>
        <p>00</p>
        <p>Sec</p>
      </div>
    </div>
  );
};

export default TimeDisplay;
