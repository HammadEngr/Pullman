import React from "react";
import styles from "./NewsLetter.module.css";
const NewsLetter = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <h1>JOIN OUR NEWSLETTER</h1>
      <form className={styles.form}>
        <input
          htmlFor="email"
          placeholder="Enter Your Email"
          className={styles.input}
        />
        <button className={styles.btn}>Subscribe</button>
      </form>
      <p>To get the latest news, Subscribe to news letter</p>
    </div>
  );
};

export default NewsLetter;
