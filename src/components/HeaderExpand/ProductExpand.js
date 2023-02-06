import React from "react";
import styles from "./ProductExpand.module.css";
import ExpandReusable from "./ExpandReusable";

const ProductExpand = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  const listItems = [
    "Simple product",
    "Affiliate Product",
    "Variable Product",
    "Countdown Product",
  ];
  return <ExpandReusable listItems={listItems} className={customClass} />;
};

export default ProductExpand;
