import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to the Pokémon World!</h1>
        <p className={styles.subtitle}>
          Catch 'em all, train your team, and explore!
        </p>
      </header>

      <section className={styles.buttonSection}>
        <button className={styles.exploreButton}>
          <Link to="/">Explore Pokémon</Link>
        </button>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>Made with ❤️ for Pokémon fans.</p>
      </footer>
    </div>
  );
};

export default Home;
