import styles from "./PokemonExperience.module.css";

const PokemonExperience = ({ experience }) => {
  return (
    <div className={styles.BaseExperienceContainer}>
      <h2>Experience: {experience}</h2>
    </div>
  );
};

export default PokemonExperience;
