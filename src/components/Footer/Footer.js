import React from "react";
import styles from "./Footer.module.css";
import MainFooter from "./MainFooter";
import SmallFooter from "./SmallFooter";
import SubFooter from "./SubFooter";
import NewsLetter from "./NewsLetter";
const Footer = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <footer className={customClass}>
      <NewsLetter />
      <MainFooter />
      <SmallFooter />
      <SubFooter />
    </footer>
  );
};

export default Footer;
