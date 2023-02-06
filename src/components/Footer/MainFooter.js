import React from "react";
import styles from "./MainFooter.module.css";
import FooterReuseable from "./FooterReuseable";
import { listItems } from "../../Data/FooterData";
const MainFooter = (props) => {
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      {listItems.map((item, i) => (
        <FooterReuseable
          title={item.title}
          listItems={item.listItems}
          className={styles.component}
          key={`${Math.random()}MAIN_FOOT-COMP${i}`}
        />
      ))}
    </div>
  );
};

export default MainFooter;
