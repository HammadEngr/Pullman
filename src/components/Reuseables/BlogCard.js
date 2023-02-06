import React from "react";
import styles from "./BlogCard.module.css";
const BlogCard = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return <div className={customClass}>{props.children}</div>;
};

export default BlogCard;
