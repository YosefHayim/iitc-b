import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import SearchBar from "../../components/Searchbar/Searchbar";
import PokemonBallIcon from "/public/images/pokemon-ball-3d.svg";
import BoltIcon from "/public/images/bolt-3d.svg";
import EvolutionIcon from "/public/images/evolution-3d.svg";
import LocationIcon from "/public/images/location-3d.svg";
import HomeImage from "/public/images/homepage-image.svg";
import RandomPokedexPicks from "../../components/RandomPokedexPicks/RandomPokedexPicks";

const Home = ({ setInput }) => {
  return (
    <div className={styles.Homepage}>
      <div className={styles.ImageContainer}>
        <img
          className={styles.HomeImage}
          src={HomeImage}
          alt="Ash And Pikachu sitting on a mountain and watching the sunset"
        />
      </div>
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

          <Link to="/moves" className={styles.LinkTag}>
            <div className={styles.MovesContainer}>
              <img src={BoltIcon} alt="Bolt Icon" className={styles.BoltIcon} />
              <button className={styles.MovesButton}>Moves</button>
            </div>
          </Link>

          <Link to="/evolutions" className={styles.LinkTag}>
            <div className={styles.EvolutionsContainer}>
              <img
                src={EvolutionIcon}
                alt="Evolution Icon"
                className={styles.EvolutionIcon}
              />
              <button className={styles.EvolutionButton}>Evolutions</button>
            </div>
          </Link>

          <Link to="/locations" className={styles.LinkTag}>
            <div className={styles.LocationsContainer}>
              <img
                src={LocationIcon}
                alt="Location Icon"
                className={styles.LocationIcon}
              />
              <button className={styles.LocationsButton}>Locations</button>
            </div>
          </Link>
        </div>
      </div>
      <RandomPokedexPicks />
    </div>
  );
};

export default Home;
