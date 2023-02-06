import React from "react";
import styles from "./AboutUs.module.css";
import about from "../../../images/about.webp";
const AboutUs = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <React.Fragment>
      <div className={customClass}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${about})` }}
        ></div>
        <div className={styles.about}>
          <h1>
            PULLMAN SNEAKERS <span>ABOUT US</span>
          </h1>
          <div>
            <h2>Investigationes demonstraverunt lectores legere me.</h2>
            <p className={styles.description}>
              Quisque consequat venenatis rutrum. Quisque posuere enim augue, in
              rhoncus diam dictum non.Nunc id ante quis tellus faucibus
            </p>
          </div>
          <div className={styles.line}></div>
          <address>
            <p>Manchester Road 123-78B, Silictown 7854MD, Great Country</p>
            <p>Phone: +46 123 456 789</p>
            <p>Email: hello@sitename.com</p>
          </address>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
