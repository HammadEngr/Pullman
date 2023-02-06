import React, { useState, useRef } from "react";
import styles from "./Blog.module.css";
import BlogSmall from "../../Reuseables/BlogSmall";
import { BlogData } from "../../../Data/Blog/BlogData";
const Blog = (props) => {
  const [curSlide, setCuslide] = useState(0);
  const [slide, setSlide] = useState(0);
  const slideRef = useRef();
  const maxSlide =
    BlogData.length % 2 === 0 ? BlogData.length / 2 : (BlogData.length + 1) / 2;
  const nextSlide = () => {
    if (curSlide < maxSlide - 2) {
      setCuslide((prev) => prev + 1);
      setSlide((prev) => prev + 50);
    }
    if (curSlide >= maxSlide - 2) {
      setCuslide(0);
      setSlide(0);
    }
    console.log(slideRef.current.getBoundingClientRect());
  };

  const prevSlide = () => {
    if (curSlide > 0) {
      setCuslide((prev) => prev - 1);
      setSlide((prev) => prev - 50);
    }
    if (curSlide <= 0) {
      setCuslide(maxSlide - 2);
      setSlide((maxSlide - 2) * 50);
    }
  };
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <div className={styles.heading}>
        <h1>FROM OUR BLOG</h1>
        <p>
          Investigationes demonstraverunt lectores legere me lius quod ii legunt
          saepius claritas est etiam processus dynamicus, qui sequitur
          mutationem.
        </p>
      </div>
      <div className={styles.sub_container}>
        <div
          className={styles.container}
          ref={slideRef}
          style={{ transform: `translateX(${0 - slide}%` }}
        >
          {BlogData.map((data, i) => (
            <BlogSmall data={data} key={`${Math.random()}BLOG-ITEM${i}`} />
          ))}
        </div>
        <button className={styles.left} onClick={prevSlide}>
          &lt;
        </button>
        <button className={styles.right} onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Blog;
