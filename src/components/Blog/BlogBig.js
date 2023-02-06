import React from "react";
import styles from "./BlogBig.module.css";
import BlogCard from "../Reuseables/BlogCard";
import BlogImgCard from "../Reuseables/BlogImgCard";
import BlogIntro from "../Reuseables/BlogIntro";
const BlogBig = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <BlogCard className={customClass}>
      <BlogImgCard data={props.data} className={styles.image} />
      <BlogIntro data={props.data} className={styles.intro} />
    </BlogCard>
  );
};

export default BlogBig;
