import styles from "./PokemonNameAndId.module.css";

const PokemonNameAndId = ({ pokemonName, pokemonId }) => {
  return (
    <div className={styles.PokemonNameAndIdContainer}>
      <h1 className={styles.PokemonTitle}>{pokemonName}</h1>
      <h2 id={pokemonId} className={styles.PokemonId}>
        #{pokemonId}
      </h2>
    </div>
  );
};

export default PokemonNameAndId;
