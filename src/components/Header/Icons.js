import React, { useContext } from "react";
import styles from "./Icons.module.css";
import { Link } from "react-router-dom";
import CartExpand from "./CartExpand";
import cart from "../../images/trolley-cart.png";
import search from "../../images/loupe.png";
import CartContext from "../store/CartContext";
///////////////////////////////////////////////////////
const Icons = () => {
  const ctx = useContext(CartContext);
  return (
    <ul className={styles.main}>
      <li className={styles.cart}>
        <img src={search} className={styles.img} />
      </li>
      <li className={styles.cart}>
        <Link to="/cart" className={styles.drop_btn}>
          <img src={cart} className={styles.img} />
          <span className={styles.qty}>{ctx.items.length}</span>
        </Link>
        <CartExpand className={styles.cart_expand} />
      </li>
    </ul>
  );
};

export default Icons;
