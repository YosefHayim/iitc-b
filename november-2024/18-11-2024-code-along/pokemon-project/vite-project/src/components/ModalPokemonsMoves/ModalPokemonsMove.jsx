import capitalizeFirstLetter from "../../utils/firstLetterUppercase";
import styles from "./ModalPokemonsMove.module.css";

const ModalPokemonsMove = ({ moves }) => {
  return (
    <div className={styles.movesContainer}>
      {moves.slice(0, 5).map((move) => (
        <div key={move.move.name}>
          <h4>{capitalizeFirstLetter(move.move.name.replace(/-/g, " "))}</h4>
        </div>
      ))}
    </div>
  );
};

export default ModalPokemonsMove;
