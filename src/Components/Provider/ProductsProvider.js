import React, { useContext, useReducer } from "react";
import { productsData } from "../../localDataBase/productsData";
import styles from "./ProductsProvider.module.css";
const productContext = React.createContext();

const productContextDispatcher = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "removeHandler": {
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;
    }
    case "incrementHandler": {
      const index = state.findIndex((I) => I.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }
    case "decrementHandler": {
      const index = state.findIndex((I) => I.id === action.id);
      const product = { ...state[index] };
      product.quantity--;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      if (product.quantity === 0) {
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      } else {
        return updatedProducts;
      }
    }
    case "filter": {
      const value = action.event.target.value;
      console.log(value);
      const updatedProducts = productsData.filter(
        (p) => p.availablePackings.indexOf(value) >= 0
      );
      return updatedProducts;
    }
    case "search": {
      const value = action.event.target.value.toLowerCase();
      console.log(value);
      const searchedProducts = productsData.filter((p) =>
        p.title.toLowerCase().includes(value.toLowerCase())
      );
      return searchedProducts;
    }

    default:
      return state;
  }
};
const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);
  return (
    <div className={styles.proContainer}>
      <productContext.Provider value={products}>
        <productContextDispatcher.Provider value={dispatch}>
          {children}
        </productContextDispatcher.Provider>
      </productContext.Provider>
    </div>
  );
};
export const useProducts = () => useContext(productContext);
export const useProductsActions = () => useContext(productContextDispatcher);

export default ProductsProvider;
