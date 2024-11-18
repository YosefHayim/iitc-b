import BurgerIcon from "../../../public/images/mobile-burger.png";
import styles from "./TopNavbar.module.css";

const TopNavbar = () => {
  return (
    <div className={styles.NavbarContainer}>
      <h1>Pokedex</h1>
      <img src={BurgerIcon} alt="Burger Icon" className={styles.BurgerIcon} />
    </div>
  );
};

export default TopNavbar;
