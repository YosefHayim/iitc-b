import styles from "./PokemonAbilities.module.css";

const PokemonAbilities = ({ abilities }) => {
  return (
    <div className={styles.AbilitiesContainer}>
      <h2>Abilities:</h2>
      <ul>
        {abilities.map(({ ability }, index) => (
          <li key={index}>{ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonAbilities;
