import React from "react";
import styles from "./Filter.module.css";
const Filter = () => {
  return (
    <div className={styles.filterContainer}>
      <span>packages:</span>
      <div className={styles.packagesContainer}>
        <sapn>1kg</sapn>
        <sapn>2kg</sapn>
        <sapn>3kg</sapn>
        <sapn>5kg</sapn>
      </div>
    </div>
  );
};

export default Filter;
