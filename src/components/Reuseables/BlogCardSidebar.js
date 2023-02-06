import React from "react";
import styles from "./BlogCardSidebar.module.css";
const BlogCardSidebar = (props) => {
  const clickHandler = (e) => {
    const dataTab = e.target.dataset.btn;
    props.onSelect(dataTab);
  };
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <h1>{props.title}</h1>
      {props.children}
      <div className={styles.btns}>
        {props.data.map((data, i) => (
          <button
            onClick={clickHandler}
            name={data.replace(/\s+/g, "")}
            data-btn={data}
            key={`${Math.random()}BLOG-CARDSIDE${i}`}
          >
            {data}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogCardSidebar;
