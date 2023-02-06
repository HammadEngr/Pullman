import React, { useState } from "react";
import styles from "./InStore.module.css";
import SmallMultiDisplay from "../../Reuseables/SmallMultiDisplay";

import { productsData } from "../../../Data/InStore/ProductsData";

//////////////////////////////////////////////////////////

const featuredProducts = productsData.filter(
  (item) => item.rating === "Featured Products"
);
const bestsellerProducts = productsData.filter(
  (item) => item.rating === "Best Sellers"
);
const newProducts = productsData.filter(
  (item) => item.rating === "New Arrivals"
);

//////////////////////////////////////////////////////////
const InStore = (props) => {
  const [featuredBtn, setFeaturedBtn] = useState(true);
  const [bestSellersBtn, setBestSellersBtn] = useState(false);
  const [newArrivalsBtn, setNewArrivalsBtn] = useState(false);
  const displayFeatured = () => {
    setFeaturedBtn(true);
    setBestSellersBtn(false);
    setNewArrivalsBtn(false);
  };
  const displayBestSellers = () => {
    setBestSellersBtn(true);
    setFeaturedBtn(false);
    setNewArrivalsBtn(false);
  };
  const displayNewArrivals = () => {
    setNewArrivalsBtn(true);
    setBestSellersBtn(false);
    setFeaturedBtn(false);
  };
  const customClass = `${styles.main} ${props.className}`;

  return (
    <div className={customClass}>
      <div className={styles.header}>
        <h1>OUR IN STORE</h1>
        <p>
          Investigationes demonstraverunt lectores legere me lius quod ii legunt
          saepius claritas est etiam processus dynamicus, qui sequitur
          mutationem.
        </p>
        <div className={styles.btns_container}>
          <button
            className={
              featuredBtn ? `${styles.btn} ${styles.active}` : `${styles.btn}`
            }
            onClick={displayFeatured}
          >
            FEATURED PRODUCTS
          </button>
          <button
            className={
              bestSellersBtn
                ? `${styles.btn} ${styles.active}`
                : `${styles.btn}`
            }
            onClick={displayBestSellers}
          >
            BEST SELLERS
          </button>
          <button
            className={
              newArrivalsBtn
                ? `${styles.btn} ${styles.active}`
                : `${styles.btn}`
            }
            onClick={displayNewArrivals}
          >
            NEW ARRIVALS
          </button>
        </div>
      </div>
      {featuredBtn && <SmallMultiDisplay data={featuredProducts} />}
      {bestSellersBtn && <SmallMultiDisplay data={bestsellerProducts} />}
      {newArrivalsBtn && <SmallMultiDisplay data={newProducts} />}
    </div>
  );
};

export default InStore;
