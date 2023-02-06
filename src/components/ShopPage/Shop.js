import React, { useState } from "react";
import styles from "./Shop.module.css";
import PagesHeader from "../Reuseables/PagesHeader";
import home from "../../images/icons/home.png";
import SmallDisplay from "../Reuseables/SmallDisplay";
import BlogCardSidebar from "../Reuseables/BlogCardSidebar";
import { productsData } from "../../Data/InStore/ProductsData";
import gridIcon from "../../images/icons/grid-view.png";
import listIcon from "../../images/icons/list-view.png";
import arrow from "../../images/chevron.png";
/////////////////////////////////////////////////////////////

const Shop = (props) => {
  const [sortBtn, setSortBtn] = useState("All Products");
  let productDisplay = productsData.map((data, i) => (
    <SmallDisplay data={data} key={`smShop${i}`} />
  ));
  const selectHandler = (val) => {
    setSortBtn(val);
  };
  if (
    sortBtn === "Featured Products" ||
    sortBtn === "Best Sellers" ||
    sortBtn === "New Arrivals"
  ) {
    productDisplay = productsData
      .filter((data) => data.rating === `${sortBtn}`)
      .map((data, i) => <SmallDisplay data={data} key={`smShop${i}`} />);
  }
  if (sortBtn === "DISCOUNTEDS") {
    productDisplay = productsData
      .filter((data) => data.discounted)
      .map((data, i) => <SmallDisplay data={data} key={`smShop${i}`} />);
  }
  if (sortBtn === "SPECIALS") {
    productDisplay = productsData
      .filter((data) => data.specials)
      .map((data, i) => <SmallDisplay data={data} key={`smShop${i}`} />);
  }
  if (
    sortBtn === "NIKE" ||
    sortBtn === "ADIDAS" ||
    sortBtn === "TIMBERLAND" ||
    sortBtn === "PUMA" ||
    sortBtn === "VERSACE" ||
    sortBtn === "TOMMY HILFIGUER"
  ) {
    productDisplay = productsData
      .filter((data) => data.vendor === `${sortBtn}`)
      .map((data, i) => <SmallDisplay data={data} key={`smShop${i}`} />);
  }
  if (sortBtn === "All Products") {
    productDisplay = productsData.map((data, i) => (
      <SmallDisplay data={data} key={`smShop${i}`} />
    ));
  }
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <PagesHeader>
        <div className={styles.heading}>
          <h1>{sortBtn}</h1>
          <div className={styles.sub_heading}>
            <img src={home} />
            <p>{sortBtn}</p>
          </div>
        </div>
      </PagesHeader>
      <div className={styles.main_container}>
        <div className={styles.sub_container}>
          <div className={styles.sidebar}>
            <form className={styles.search_form}>
              <input type="text" placeholder="search our store" />
              <button>Search</button>
            </form>
            <BlogCardSidebar
              title="Categories"
              data={[
                "All Products",
                "Featured Products",
                "Best Sellers",
                "New Arrivals",
                "SPECIALS",
                "DISCOUNTEDS",
              ]}
              onSelect={selectHandler}
              key="smSHOP-BLOG1"
            />
            <BlogCardSidebar
              title="Vendors"
              data={[
                "NIKE",
                "ADIDAS",
                "TIMBERLAND",
                "PUMA",
                "VERSACE",
                "TOMMY HILFIGUER",
              ]}
              onSelect={selectHandler}
              key="smSHOP-BLOG2"
            />
          </div>
          <div className={styles.right_container}>
            <div className={styles.top_bar}>
              <div className={styles.toggle_btns}>
                <img src={gridIcon} />
                <img src={listIcon} />
              </div>
              <p>{sortBtn}</p>
              <div className={styles.sort_btns}>
                <button className={styles.sort_btn}>
                  Sort By:
                  <span className={styles.param}></span>
                  <span>
                    <img src={arrow} />
                  </span>
                </button>

                {/* <div className={styles.params}>
                  <button name="Featured">Featured</button>
                  <button name="New Arrivals">New Arrivals</button>
                  <button name="Best Sellers">Best Sellers</button>
                  <button name="Alphabetical">Alphabetical</button>
                  <button name="low to high">Price, low to high</button>
                  <button name="high to low">Price, high to low</button>
                </div> */}
              </div>
            </div>

            <div className={styles.display_container}>{productDisplay}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
