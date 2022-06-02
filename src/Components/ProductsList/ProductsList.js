import React from "react";
import styles from "./ProductsList.module.css";
import productsData from "../../localDataBase/productsData";
import Products from "../Products/Products";
const ProductsList = (productsData) => {
  return (
    <div className={styles.productsList}>
      <h2 className={styles.title}>Cart</h2>
      <Products />
      <Products />
      <Products />
    </div>
  );
};

export default ProductsList;
