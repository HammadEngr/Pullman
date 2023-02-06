import React from "react";
import styles from "./ExpandReuseable.module.css";
const ExpandReusable = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <ul className={styles.list_items}>
        {props.listItems.map((item, i) => (
          <li key={`HDM#${i}`} className={styles.list_item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpandReusable;
