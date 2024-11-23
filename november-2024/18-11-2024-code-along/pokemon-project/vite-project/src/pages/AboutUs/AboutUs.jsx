import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div>
      <h1 className={styles.AboutUsTitle}>About Us</h1>
      <div className={styles.Introduction}>
        <p>
          Welcome to our learning journey! We're on a mission to master the art
          of full-stack development, one React component at a time.
        </p>
      </div>
      <div className={styles.AboutUsContainer}>
        <div className={styles.Mission}>
          <h2 className={styles.OurMissionTitle}>Our Mission</h2>
          <p>
            To build engaging web apps while leveling up our skills in React,
            React Router, and seamless API integrations.
          </p>
        </div>
        <div className={styles.Potential}>
          <h2 className={styles.PotentialTitle}>Potential</h2>
          <p>
            By conquering these tools, we're unlocking the doors to crafting
            dynamic, user-friendly applications and advancing toward full-stack
            expertise.
          </p>
        </div>
        <div className={styles.SkillsContainer}>
          <h2 className={styles.SkillsWereGainingTitle}>
            Skills We're Gaining
          </h2>
          <ul className={styles.SkillsUl}>
            <li>Creating smooth navigation using React Router</li>
            <li>Building interactive components with React</li>
            <li>Fetching and managing data with API calls</li>
            <li>Designing modular and maintainable code</li>
          </ul>
        </div>
        <div className={styles.CreativeCopyright}>
          <h2 className={styles.OurCodingJourneyTitle}>Our Coding Journey</h2>
          <p>
            Every line of code we write tells a story. Every error we fix, a
            lesson learned. We're shaping the future, one keystroke at a time.
            Thanks for being part of this epic coding adventure!
          </p>
        </div>
        <div className={styles.Adventure}>
          <p>
            Join us on this adventure as we transform lines of code into
            real-world solutions!
          </p>
        </div>
        <button className={styles.NavigatePokedexButton}>
          <Link to="/pokedex" className={styles.TagLink}>
            Visit Our PokedeX database!
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
