import React, { useContext } from "react";
import styles from "./SubHeader.module.css";
import { Link } from "react-router-dom";
// ICONS
import fb from "../../../images/facebook.png";
import twitter from "../../../images/twitter.png";
import insta from "../../../images/instagram.png";
// Components
import CurrExpand from "./CurrExpand";
import CartContext from "../../store/CartContext";

const SubHeader = () => {
  const ctx = useContext(CartContext);
  const curSelectHandler = (val) => {
    ctx.selectCurrency(val);
  };
  const buttonTitles = ["My Account", "Checkout", "Login"];
  const btnLinks = ["/login", "/checkout", "/login"];
  const icons = [fb, twitter, insta];
  return (
    <ul className={styles.main}>
      <li className={styles.btn}>
        Currency: <span>{ctx.currency}</span>
        <CurrExpand
          listItems={["USD", "GBP", "EUR", "JPY", "CAD"]}
          className={styles.dropdown_content}
          onSelect={curSelectHandler}
        />
      </li>
      <li className={styles.sub}>
        <div className={styles.icons_container}>
          {icons.map((icon, i) => (
            <img
              src={icon}
              className={styles.icon}
              key={`${Math.random()}SUBHEAD${i}`}
            />
          ))}
        </div>
        <div className={styles.btn_container}>
          {buttonTitles.map((btn, i) => (
            <button className={styles.btn} key={`${Math.random()}SUBBTN${i}`}>
              <Link to={`${btnLinks[i]}`} className={styles.link}>
                {btn}
              </Link>
            </button>
          ))}
        </div>
      </li>
    </ul>
  );
};

export default SubHeader;
