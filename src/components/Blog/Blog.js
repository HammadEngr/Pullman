import React from "react";
import styles from "./Blog.module.css";
import PagesHeader from "../Reuseables/PagesHeader";
import { BlogData } from "../../Data/Blog/BlogData";
import BlogBig from "./BlogBig";
import BlogCardSidebar from "../Reuseables/BlogCardSidebar";
const Blog = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <PagesHeader className={styles.header}>
        <h1>Our Blog</h1>
      </PagesHeader>
      <div className={styles.main_container}>
        <div className={styles.sidebar_container}>
          <BlogCardSidebar title="Search" data={[""]}>
            <form className={styles.form}>
              <input htmlFor="text" placeholder="Search our store" />
              <img />
            </form>
          </BlogCardSidebar>
          <BlogCardSidebar
            title="Custom Menu"
            data={[
              "Delivery",
              "Legal Notice",
              "About",
              "Secure Payment",
              "Contact Us",
              "Sitemap",
            ]}
          />
          <BlogCardSidebar title="Recent Post" data={["Recent Post"]} />
          <BlogCardSidebar
            title="Archive"
            data={[
              "September 2019",
              "Sed Do Eiusmod Tempor",
              "Consectetur AdipisicingElit",
              "This Is Eight Post XipBlog",
              "This Is Seventh PostXipBlog",
              "This Is Third Post XipBlog",
              "This Is Second Post XipBlog",
              "This Is First Post XipBlog",
            ]}
          />
          <BlogCardSidebar title="Tags" data={["News", "Staff", "Store"]} />
        </div>
        <div className={styles.blog_container}>
          {BlogData.map((data, i) => (
            <BlogBig
              data={data}
              className={styles.blog}
              key={`${Math.random()}BLOG-BLOG-BIG${i}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
