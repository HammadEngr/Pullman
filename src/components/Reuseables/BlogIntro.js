import React from "react";
import styles from "./BlogIntro.module.css";
const BlogIntro = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <h1 className={styles.name}>{props.data.name}</h1>
      <div className={styles.date_user}>
        <div className={styles.date}>{props.data.date}</div>
        <p className={styles.user}>{props.data.user}</p>
      </div>
      <p className={styles.details}>{props.data.details}</p>
      <button className={styles.read_more}>Read more</button>
    </div>
  );
};

export default BlogIntro;
