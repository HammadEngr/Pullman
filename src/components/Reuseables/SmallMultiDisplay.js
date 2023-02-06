import React from "react";
import styles from "./SmallMultiDisplay.module.css";
import SmallDisplay from "./SmallDisplay";
const SmallMultiDisplay = (props) => {
  const customClass = `${styles.container} ${props.className}`;
  return (
    <div className={customClass}>
      {props.data.map((data, i) => (
        <SmallDisplay
          data={data}
          key={`${Math.random()}SMALL-MULTI-DISP${i}`}
        />
      ))}
    </div>
  );
};

export default SmallMultiDisplay;
