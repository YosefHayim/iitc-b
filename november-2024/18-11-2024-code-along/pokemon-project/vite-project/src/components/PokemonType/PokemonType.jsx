import styles from "./PokemonType.module.css";

const PokemonType = ({ types }) => {
  return (
    <div className={styles.TypesContainer}>
      <ul className={styles.TypesUlContainer}>
        {types.map((typeData, index) => (
          <li key={index}>{typeData.type.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonType;
