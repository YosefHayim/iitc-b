import capitalizeFirstLetter from "../../utils/firstLetterUppercase";
import styles from "./ModalPokemonAbilities.module.css";
import PsychologyIcon from "@mui/icons-material/Psychology";

const ModalPokemonAbilities = ({ abilities }) => {
  return (
    <div className={styles.abilitiesContainer}>
      <PsychologyIcon sx={{ width: "100%" }} />
      {abilities.map(
        (ability) => (
          console.log(ability.ability.name),
          (
            <div
              key={ability.ability.name}
              className={styles.abilitiesContainer}
            >
              <h4 className={styles[ability.ability.name]}>
                {capitalizeFirstLetter(ability.ability.name)}
              </h4>
            </div>
          )
        )
      )}
    </div>
  );
};

export default ModalPokemonAbilities;
