import capitalizeFirstLetter from "../../utils/firstLetterUppercase";
import styles from "./ModalPokemonAbilities.module.css";

const ModalPokemonAbilities = ({ abilities }) => {
  return (
    <div className={styles.abilitiesContainer}>
      {abilities.map((ability) => (
        <div key={ability.ability.name}>
          <h4>{capitalizeFirstLetter(ability.ability.name)}</h4>
        </div>
      ))}
    </div>
  );
};

export default ModalPokemonAbilities;
