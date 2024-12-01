import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";
import AboutUsImage from "../../../public/images/AboutUsImage.svg";

const AboutUs = () => {
  return (
    <div className={styles.AboutUsPage}>
      <h1 className={styles.AboutUsTitle}>About Us</h1>
      <hr className={styles.HomeUnderLine} />
      <div className={styles.Introduction}>
        <p>
          Welcome to our learning journey! We're on a mission to master the art
          of full-stack development, one React component at a time.
        </p>
      </div>
      <div className={styles.ImageContainer}>
        <img
          src={AboutUsImage}
          alt="Pikachu against squirtle"
          className={styles.PikachuSquirtleImg}
        />
      </div>
      <div className={styles.AboutUsContainer}>
        <div className={styles.MissionContainer}>
          <h2 className={styles.OurMissionTitle}>Our Mission</h2>
          <p>
            To build engaging web apps while leveling up our skills in React,
            React Router, and seamless API integrations.
          </p>
        </div>
        <div className={styles.PotentialContainer}>
          <h2 className={styles.PotentialTitle}>Potential</h2>
          <p>
            By conquering these tools, we're unlocking the doors to crafting
            dynamic, user-friendly applications and advancing toward full-stack
            expertise.
          </p>
        </div>
        <hr className={styles.HomeUnderLine} />

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
        <hr className={styles.HomeUnderLine} />

        <div className={styles.CreativeCopyrightContainer}>
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
            NAVIGATE TO POKEDEX
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
