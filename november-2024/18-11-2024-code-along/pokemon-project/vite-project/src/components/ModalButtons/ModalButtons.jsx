import ModalPokemonAbilities from "../ModalPokemonAbilities/ModalPokemonAbilities";
import ModalPokemonsMove from "../ModalPokemonsMoves/ModalPokemonsMove";
import ModalPokemonStats from "../ModalPokemonStats/ModalPokemonStats";
import ModalPokemonWnH from "../ModalPokemonWnH/ModalPokemonWnH";
import styles from "./ModalButtons.module.css";

const ModalButtons = ({ pokemonData }) => {
  const { id, abilities, height, name, weight, stats, types, moves } =
    pokemonData;

  return (
    <div className={styles.userOptionsChoiceView}>
      <div className={styles.PokemonTitlesData}>
        <div className={styles.aboutContainer}>
          <button className={styles.aboutButton}>About</button>
          <hr className={styles.animatedHr} />
        </div>

        <div className={styles.statsContainer}>
          <button className={styles.statsButton}>Stats</button>
          <hr className={styles.animatedHr} />
        </div>
        <div className={styles.movesContainer}>
          <button className={styles.movesButton}>Moves </button>
          <hr className={styles.animatedHr} />
        </div>
        <div className={styles.evolutionsContainer}>
          <button className={styles.evolutionsButton}>Evolutions</button>
          <hr className={styles.animatedHr} />
        </div>
        <div className={styles.locationsContainer}>
          <button className={styles.locationsButton}>Locations</button>
          <hr className={styles.animatedHr} />
        </div>
        <div className={styles.PokemonDataContainer}></div>
      </div>
      <ModalPokemonWnH height={height} weight={weight} />
      <ModalPokemonStats stats={stats} />
      <ModalPokemonsMove moves={moves} />
      <ModalPokemonAbilities abilities={abilities} />
    </div>
  );
};

export default ModalButtons;
