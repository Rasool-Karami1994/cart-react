import styles from "./Search.module.css";
import { useProductsActions } from "../Provider/ProductsProvider";
const Search = () => {
  const dispatch = useProductsActions();
  const searchHandler = (e) => {
    dispatch({ type: "search", event: e });
  };
  return (
    <div className={styles.SearchContainer}>
      <input
        onChange={searchHandler}
        className={styles.input}
        type="text"
        placeholder="Search products..."
      />
    </div>
  );
};

export default Search;
