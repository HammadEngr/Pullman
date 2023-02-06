import React from "react";
import styles from "./SmallFooter.module.css";
const SmallFooter = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <div className={styles.logo}>
        <h1>PULLMAN</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.address}>
          <address>Address: NewYork, United States</address>
        </div>
        <div className={styles.email}>
          EMAIL: <span>test@test.com</span>
        </div>
        <div className={styles.phone}>PHONE: (1234) 56789</div>
      </div>
    </div>
  );
};

export default SmallFooter;
