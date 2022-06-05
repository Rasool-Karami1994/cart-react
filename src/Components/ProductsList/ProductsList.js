import React from "react";
import styles from "./ProductsList.module.css";
import Products from "../Products/Products";
import { useProducts, useProductsActions } from "../Provider/ProductsProvider";
import Filter from "../Filters/Filter";
const ProductsList = () => {
  const products = useProducts();
  const dispatch = useProductsActions();

  const renderProducts = () => {
    if (products.length === 0)
      return (
        <div className={styles.emptyCart}> there is no product here ...</div>
      );

    return products.map((product) => {
      return (
        <Products
          product={product}
          key={product.id}
          onDelete={() => dispatch({ type: "removeHandler", id: product.id })}
          incrementHandler={() =>
            dispatch({ type: "incrementHandler", id: product.id })
          }
          decrementHandler={() =>
            dispatch({ type: "decrementHandler", id: product.id })
          }
        />
      );
    });
  };
  // return (
  //   <div className={styles.productsList}>
  //     <h2 className={styles.title}>Cart</h2>
  //     <Products />
  //     <Products />
  //     <Products />
  //   </div>
  // );
  return (
    <div className={styles.productsList}>
      <h2 className={styles.title}>Cart</h2>
      {renderProducts()}
    </div>
  );
};

export default ProductsList;
