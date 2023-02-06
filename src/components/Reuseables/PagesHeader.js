import React from "react";
import styles from "./PagesHeader.module.css";
import BgImg from "../../images/pagesBgImg.jpg";
const PagesHeader = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass} style={{ backgroundImage: `url(${BgImg})` }}>
      {props.children}
    </div>
  );
};

export default PagesHeader;
