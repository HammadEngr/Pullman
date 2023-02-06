import React from "react";
import styles from "./FooterReuseable.module.css";
const FooterReuseable = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <h1 className={styles.title}>{props.title}</h1>
      <ul className={styles.items}>
        {props.listItems.map((item, i) => (
          <li key={`FLC#${i}`} className={styles.list_item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterReuseable;
