import React, { useContext } from "react";
import styles from "./MobileHeader.module.css";
import plus from "../../images/add.png";
import arrow from "../../images/chevron.png";
import fb from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import insta from "../../images/instagram.png";

const MobileHeader = (props) => {
  const listItems = ["Home", "Shop", "Product", "BLOG", "Contact Us"];
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="search here" />
      </form>
      <nav className={styles.nav}>
        <ul className={styles.list_items}>
          {listItems.map((item, i) => (
            <div className={styles.list_item_container}>
              <li key={`LMN#${i}`} className={styles.list_item}>
                {item}
              </li>
              <img src={plus} className={styles.plus} />
            </div>
          ))}
        </ul>
      </nav>
      <div className={styles.nav_account}>
        <button className={styles.btn}>
          CURRENCY: <span>USD</span>{" "}
          <span className={styles.arrow}>
            <img src={arrow} />
          </span>
        </button>
        <button className={styles.btn}>
          My Account{" "}
          <span className={styles.arrow}>
            <img src={arrow} />
          </span>
        </button>
        <p>(1234) 1234545</p>
        <p>test@test.com</p>
      </div>
      <div className={styles.social_icons}>
        <img src={fb} />
        <img src={twitter} />
        <img src={insta} />
      </div>
    </div>
  );
};

export default MobileHeader;
