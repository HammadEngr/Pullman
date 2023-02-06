import React from "react";
import styles from "./BlogImgCard.module.css";
const BlogImgCard = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <img src={props.data.img} />
    </div>
  );
};

export default BlogImgCard;
