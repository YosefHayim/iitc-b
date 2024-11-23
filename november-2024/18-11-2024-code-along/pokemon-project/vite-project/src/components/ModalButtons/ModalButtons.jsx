import { useState } from "react";
import ModalPokemonAbilities from "../ModalPokemonAbilities/ModalPokemonAbilities";
import ModalPokemonsMove from "../ModalPokemonsMoves/ModalPokemonsMove";
import ModalPokemonStats from "../ModalPokemonStats/ModalPokemonStats";
import ModalPokemonWnH from "../ModalPokemonWnH/ModalPokemonWnH";
import styles from "./ModalButtons.module.css";

const ModalButtons = ({ pokemonData }) => {
  const { id, abilities, height, name, weight, stats, types, moves } =
    pokemonData;

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = (e) => {
    const button = e.target.closest("button");

    if (button.innerText === `About` || button.innerText === `Stats`) {
      console.log(button.innerText);
      setIsVisible(!isVisible);
    }
  };

  return (
    <div className={styles.userOptionsChoiceView} onClick={toggleVisibility}>
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

      {isVisible && (
        <ModalPokemonWnH
          height={height}
          weight={weight}
          style={{ display: "flex" }}
        />
      )}
      {isVisible && (
        <ModalPokemonStats stats={stats} style={{ display: "flex" }} />
      )}
      {isVisible && (
        <ModalPokemonsMove moves={moves} style={{ display: "flex" }} />
      )}
      {isVisible && (
        <ModalPokemonAbilities
          abilities={abilities}
          style={{ display: "flex" }}
        />
      )}
    </div>
  );
};

export default ModalButtons;
