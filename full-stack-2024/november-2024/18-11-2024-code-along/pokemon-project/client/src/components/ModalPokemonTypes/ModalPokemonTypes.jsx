import capitalizeFirstLetter from "../../utils/firstLetterUppercase";
import styles from "./ModalPokemonTypes.module.css";

const ModalPokemonTypes = ({ types }) => {
  return (
    <div className={styles.TypesContainer}>
      {types.map((type) => (
        <div key={type.type.name} className={styles[type.type.name]}>
          {capitalizeFirstLetter(type.type.name)}
        </div>
      ))}
    </div>
  );
};

export default ModalPokemonTypes;
