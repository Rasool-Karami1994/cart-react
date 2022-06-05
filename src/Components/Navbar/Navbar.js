import styles from "./Navbar.module.css";
import Filter from "../Filters/Filter";
import Search from "../Search/Search";
const Navbar = () => {
  return (
    <div className={styles.NavbarContainer}>
      <Search />
      <Filter />
    </div>
  );
};

export default Navbar;
