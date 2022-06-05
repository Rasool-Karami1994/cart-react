import React from "react";
import styles from "./Products.module.css";
const Products = ({
  product,
  onDelete,
  incrementHandler,
  decrementHandler,
}) => {
  return (
    <div className={styles.Products}>
      <div class={styles.imgContainer}>
        <img src={product.image} class={styles.productImg} />
      </div>
      <section className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <span className={styles.titleSpan1}>{product.title}</span>
          <span className={styles.titleSpan2}>$ {product.price}</span>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.buttons}>
            <button onClick={incrementHandler}>+</button>
            <span>{product.quantity}</span>
            <button
              onClick={decrementHandler}
              className={`${product.quantity === 1 && styles.remove}`}
            >
              -
            </button>
          </div>
          <div className={styles.deleteButton}>
            <i class="fa fa-trash" aria-hidden="true"></i>
            <button onClick={onDelete}>delete</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
