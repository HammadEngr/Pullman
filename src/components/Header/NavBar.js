import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import arrow from "../../images/chevron.png";
import MainHeaderContext from "../store/MainHeaderContext";
import HomeExpand from "../HeaderExpand/HomeExpand";
import ShopExpand from "../HeaderExpand/ShopExpand";
import ProductExpand from "../HeaderExpand/ProductExpand";
/////////////////////////////////////////////////////////////////////
const NavBar = () => {
  const MTX = useContext(MainHeaderContext);
  const listItems = ["Home", "Shop", "Product", "BLOG", "Contact Us"];
  return (
    <nav>
      <ul className={styles.nav}>
        <li className={styles.dropdown}>
          <Link to="/home" className={styles.drop_btn}>
            Home
          </Link>
          <HomeExpand className={styles.dropdown_content} />
        </li>
        <li className={styles.dropdown}>
          <Link to="/shop" className={styles.drop_btn}>
            Shop
          </Link>
          <ShopExpand className={styles.dropdown_content} />
        </li>

        <li className={styles.dropdown}>
          <a className={styles.drop_btn}>Product</a>
          <ProductExpand className={styles.dropdown_content} />
        </li>
        <li className={styles.dropdown}>
          <Link to="/blog" className={styles.drop_btn}>
            BLOG
          </Link>
        </li>
        <li className={styles.dropdown}>
          <Link to="/contactus" className={styles.drop_btn}>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
