import styles from "./Filter.module.css";
import { useProductsActions } from "../Provider/ProductsProvider";

const Filter = () => {
  const dispatch = useProductsActions();
  const filterHandler = (e) => {
    dispatch({ type: "filter", event: e });
  };

  return (
    <div className={styles.filterContainer}>
      <h3>Filters:</h3>
      <div onClick={filterHandler} className={styles.packagesContainer}>
        <button className={styles.Packeges} value="1Kg">
          1Kg
        </button>
        <button className={styles.Packeges} value="2Kg">
          2Kg
        </button>
        <button className={styles.Packeges} value="3Kg">
          3Kg
        </button>
        <button className={styles.Packeges} value="5Kg">
          5Kg
        </button>
      </div>
    </div>
  );
};

export default Filter;
