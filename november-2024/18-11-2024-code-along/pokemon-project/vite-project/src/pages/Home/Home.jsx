import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import SearchBar from "../../components/Searchbar/Searchbar";
import PokemonBallIcon from "/public/images/pokemon-ball-3d.png";
import BoltIcon from "/public/images/bolt-3d.png";
import EvolutionIcon from "/public/images/evolution-3d.png";
import LocationIcon from "/public/images/location-3d.png";

const Home = ({ setInput }) => {
  return (
    <div className={styles.Homepage}>
      <h1 className={styles.HomeTitle}>
        Discover Over 1,000 Pokémon in Our Database!
      </h1>

      <div className={styles.HomeContainer}>
        <SearchBar setInput={setInput} />

        <div className={styles.ContainerOptions}>
          <Link to="/pokedex" className={styles.LinkTag}>
            <div className={styles.PokedexContainer}>
              <img
                src={PokemonBallIcon}
                alt="Pokemon ball Icon"
                className={styles.PokemonBallIcon}
              />
              <button className={styles.PokedexButton}>Pokedex</button>
            </div>
          </Link>

          <div className={styles.MovesContainer}>
            <img src={BoltIcon} alt="Bolt Icon" className={styles.BoltIcon} />
            <button className={styles.MovesButton}>Moves</button>
          </div>

          <div className={styles.EvolutionsContainer}>
            <img
              src={EvolutionIcon}
              alt="Evolution Icon"
              className={styles.EvolutionIcon}
            />
            <button className={styles.EvolutionButton}>Evolutions</button>
          </div>

          <div className={styles.LocationsContainer}>
            <img
              src={LocationIcon}
              alt="Location Icon"
              className={styles.LocationIcon}
            />
            <button className={styles.LocationsButton}>Locations</button>
          </div>
        </div>
      </div>
      <h2 className={styles.PopularPokedexPicks}>Popular Pokedex Picks</h2>
      <hr className={styles.HomeUnderLine} />
    </div>
  );
};

export default Home;
