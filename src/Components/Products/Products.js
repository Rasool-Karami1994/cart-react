import React from "react";
import styles from "./Products.module.css";
const Products = () => {
  return (
    <div className={styles.Products}>
      <div class={styles.imgContainer}>
        <img src={require("./Broccoli.jpg")} class={styles.productImg} />
      </div>
      <section className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <span className={styles.titleSpan1}>Broccoli</span>
          <span className={styles.titleSpan2}>$ 12</span>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.buttons}>
            <button>+</button>
            <span>1</span>
            <button>-</button>
          </div>
          <div className={styles.deleteButton}>
            <i class="fa fa-trash" aria-hidden="true"></i>
            <button>delete</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
