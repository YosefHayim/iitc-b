import styles from "./PokemonNameAndId.module.css";

const PokemonNameAndId = ({ pokemonName, pokemonId }) => {
  return (
    <div>
      <h1>{pokemonName}</h1>
      <h2 className={styles.PokemonId}>#{pokemonId}</h2>
    </div>
  );
};

export default PokemonNameAndId;
