import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import homepageImage from "/public/images/homepage-image.png";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to the Pokémon World!</h1>
        <p className={styles.subtitle}>
          Catch 'em all, train your team, and explore!
        </p>
        <div className={styles.imgContainer}>
          <img
            src={homepageImage}
            alt="Battle in middle of forest of Pikachu and another pokemon"
          />
        </div>
      </header>

      <section className={styles.buttonSection}>
        <button className={styles.exploreButton}>
          <Link to="/" className={styles.linkTag}>
            <div className={styles.buttonContainer}>
              <CatchingPokemonIcon />
              <p className={styles.discoverText}>Discover</p>
            </div>
          </Link>
        </button>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>Made with ❤️ for Pokémon fans.</p>
      </footer>
    </div>
  );
};

export default Home;
