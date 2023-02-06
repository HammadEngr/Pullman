import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import NavBar from "./NavBar";
import Icons from "./Icons";
import MobileHeaderContext from "../store/MobileHeaderContext";
/////////////////////////////////

const Header = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  const mtx = useContext(MobileHeaderContext);
  return (
    <div className={customClass}>
      <h1 className={styles.title}>
        <Link to="/">PULLMAN</Link>
      </h1>
      <NavBar />
      <Icons />
      <button className={styles.toggle__button} onClick={mtx.onToggleHandler}>
        <span className={styles.toggle__button_bar}></span>
        <span className={styles.toggle__button_bar}></span>
        <span className={styles.toggle__button_bar}></span>
      </button>
    </div>
  );
};

export default Header;
