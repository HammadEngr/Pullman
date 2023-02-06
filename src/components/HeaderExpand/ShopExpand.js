import React from "react";
import styles from "./ShopExpand.module.css";
import ExpandReusable from "./ExpandReusable";
//////////////////////////////////////////
const ShopExpand = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  const women = [
    "Stripes and Shirts",
    "Sweaters and Weatshirts",
    "Hoodies and Blazers",
    "Sleeveless Tshirts",
  ];
  const kidsFashion = [
    "Two piece",
    "Baby Tshirts",
    "Sweatshirts",
    "Jackets and coats",
  ];
  const sale = [
    "New swimwear",
    "Girls Tops Sale",
    "Girls Dresses Sales",
    "Upto 60% off",
  ];
  const mens = [
    "Jackets and Coats",
    "Geans and pants",
    "Hoodies and uppers",
    "Tees and polos",
  ];
  return (
    <div className={customClass}>
      <div className={styles.container}>
        <h1 className={styles.title}>Women's Fashion</h1>
        <ExpandReusable listItems={women} className={styles.women} />
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Kid's Fashion</h1>
        <ExpandReusable listItems={kidsFashion} className={styles.kids} />
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Sale Products</h1>
        <ExpandReusable listItems={sale} className={styles.sale} />
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Men's Fashion</h1>
        <ExpandReusable listItems={mens} className={styles.men} />
      </div>
    </div>
  );
};

export default ShopExpand;
