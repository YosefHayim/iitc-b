import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import SearchBar from "../../components/Searchbar/Searchbar";

const Home = () => {
  return (
    <div className={styles.Homepage}>
      <h1 className={styles.HomeTitle}>What Pokemon are you looking for?</h1>
      <div className={styles.HomeContainer}>
        <SearchBar />
        <div className={styles.ContainerOptions}>
          <Link to="/pokedex" className={styles.LinkTag}>
            <div className={styles.PokedexContainer}>
              <button className={styles.PokedexButton}>Pokedex</button>
            </div>
          </Link>
          <div className={styles.MovesContainer}>
            <button className={styles.MovesButton}>Moves</button>
          </div>
          <div className={styles.EvolutionsContainer}>
            <button className={styles.EvolutionButton}>Evolutions</button>
          </div>
          <div className={styles.LocationsContainer}>
            <button className={styles.LocationsButton}>Locations</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
