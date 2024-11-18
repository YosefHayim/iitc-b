import styles from "./PokemonWeight.module.css";

const PokemonWeight = ({ weight }) => {
  return (
    <div className={styles.weight}>
      <h2>Pokemon Weight: {weight}</h2>
    </div>
  );
};

export default PokemonWeight;
