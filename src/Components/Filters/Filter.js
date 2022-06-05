import React from "react";
import styles from "./Filter.module.css";
const Filter = () => {
  return (
    <div className={styles.filterContainer}>
      <h3>PackagesFilter:</h3>
      <div className={styles.packagesContainer}>
        <button className={styles.Packeges} value="1kg">
          1kg
        </button>
        <button className={styles.Packeges} value="2kg">
          2kg
        </button>
        <button className={styles.Packeges} value="3kg">
          3kg
        </button>
        <button className={styles.Packeges} value="5kg">
          5kg
        </button>
      </div>
    </div>
  );
};

export default Filter;
