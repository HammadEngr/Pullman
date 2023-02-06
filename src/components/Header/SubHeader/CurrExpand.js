import React from "react";
import styles from "./CurrExpand.module.css";
const CurrExpand = (props) => {
  const currSelectHandler = (e) => {
    const currency = e.target.closest("li").textContent;
    if (!currency) return;
    props.onSelect(currency);
  };

  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <ul className={styles.list_items}>
        {props.listItems.map((item, i) => (
          <li
            key={`HDM#${i}`}
            className={styles.list_item}
            onClick={currSelectHandler}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrExpand;
