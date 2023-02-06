import React from "react";
import styles from "./Home.module.css";
import MainCarousel from "./MainCarousel/MainCarousel";
import Services from "./Services/Services";
import AboutUs from "./AboutUs/AboutUs";
import ShopByCat from "./ShopByCategory/ShopByCat";
import InStore from "./InStore/InStore";
import Blog from "./Blog/Blog";
//////////////////////////////////////////////////////
const Home = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <React.Fragment>
      <MainCarousel />
      <Services className={styles.services} />
      <AboutUs />
      <ShopByCat />
      <InStore />
      <Blog />
    </React.Fragment>
  );
};

export default Home;
