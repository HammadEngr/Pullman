import React from "react";
import styles from "./SubFooter.module.css";
import visa from "../../images/visa.png";
import cirrus from "../../images/cirrus.png";
import paypal from "../../images/paypal.png";
import discover from "../../images/discover.png";
const SubFooter = (props) => {
  const items = [
    "Delivery",
    "Legal Notice",
    "About Us",
    "Secure Payment",
    "Contact Us",
    "Sitemap",
  ];
  const icons = [visa, paypal, cirrus, discover];
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <div className={styles.icons}>
        {icons.map((icon, i) => (
          <img src={icon} key={`${Math.random()}SUB-FOOTICON${i}`}></img>
        ))}
      </div>
      <div className={styles.items}>
        {items.map((item, i) => (
          <div className={styles.item} key={`${Math.random()}SUB_FOOTITEM${i}`}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.copyrights}>
        <span>Copyrights</span>
        <a>99 shopify</a>
        <span>all rights reserved</span>
      </div>
    </div>
  );
};

export default SubFooter;
