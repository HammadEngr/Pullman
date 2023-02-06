import React from "react";
import styles from "./ShopByCat.module.css";
import { Link } from "react-router-dom";
import ShopByCatReuseable from "../../Reuseables/ShopByCatReuseable";
import catShoeOne from "../../../images/category-1.webp";
import catShoeTwo from "../../../images/category-2.webp";
import catShoeThree from "../../../images/category-3.avif";

const ShopByCat = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  const cat = [
    { title: "MEN", img: catShoeOne },
    { title: "WOMEN", img: catShoeTwo },
    { title: "QUICKIN", img: catShoeThree },
  ];
  return (
    <div className={customClass}>
      <div className={styles.title}>
        <h1>Shop by Categories Pullman</h1>
        <p>
          Investigationes demonstraverunt lectores legere me lius quod ii legunt
          saepius claritas est etiam processus dynamicus, qui sequitur
          mutationem.
        </p>
      </div>
      <div className={styles.container}>
        {cat.map((cat, i) => (
          <Link to="/shop" key={`${Math.random()}SHOP-CAT${i}`}>
            <ShopByCatReuseable data={cat} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByCat;
