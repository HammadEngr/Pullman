import React from "react";
import styles from "./HomeExpand.module.css";
import ExpandReusable from "./ExpandReusable";
const HomeExpand = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  const listItems = [
    "Home demo one",
    "Home demo two",
    "Home demo three",
    "Home demo four",
  ];
  return <ExpandReusable listItems={listItems} className={customClass} />;
};

export default HomeExpand;
