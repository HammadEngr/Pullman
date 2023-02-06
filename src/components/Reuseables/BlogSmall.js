import React from "react";
import styles from "./BlogSmall.module.css";
import BlogCard from "./BlogCard";
import BlogIntro from "./BlogIntro";
import BlogImgCard from "./BlogImgCard";
const BlogSmall = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <BlogCard className={customClass}>
      <BlogImgCard className={styles.image} data={props.data} />
      <BlogIntro data={props.data} className={styles.container}></BlogIntro>
    </BlogCard>
  );
};

export default BlogSmall;
