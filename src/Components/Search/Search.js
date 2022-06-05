import styles from "./Search.module.css";
const Search = () => {
  return (
    <div className={styles.SearchContainer}>
      <input className={styles.input} type="text" placeholder="search..." />
    </div>
  );
};

export default Search;
