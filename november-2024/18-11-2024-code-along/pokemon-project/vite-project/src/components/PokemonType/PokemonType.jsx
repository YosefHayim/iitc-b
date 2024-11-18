import styles from "./PokemonType.module.css";

const PokemonType = ({ types }) => {
  return (
    <div className={styles.TypesContainer}>
      <ul className={styles.UlContainer}>
        {types.map((typeData, index) => (
          <li key={index} className={styles.liType}>
            {typeData.type.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonType;
