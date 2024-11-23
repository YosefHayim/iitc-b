import { useState } from "react";
import ModalPokemonAbilities from "../ModalPokemonAbilities/ModalPokemonAbilities";
import ModalPokemonsMove from "../ModalPokemonsMoves/ModalPokemonsMove";
import ModalPokemonStats from "../ModalPokemonStats/ModalPokemonStats";
import ModalPokemonWnH from "../ModalPokemonWnH/ModalPokemonWnH";
import styles from "./ModalButtons.module.css";

const ModalButtons = ({ pokemonData }) => {
  const { height, weight, stats, moves, abilities } = pokemonData;
  console.log(pokemonData);

  const [activeButton, setActiveButton] = useState(null);

  const toggleVisibility = (e) => {
    const button = e.target.closest("button");

    if (!button || !button.innerText) {
      return;
    }

    const buttonName = button.innerText;
    setActiveButton((prev) => (prev === buttonName ? null : buttonName));
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
          <button className={styles.movesButton}>Moves</button>
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
      </div>

      {activeButton === "About" && (
        <ModalPokemonWnH height={height} weight={weight} />
      )}
      {activeButton === "Stats" && <ModalPokemonStats stats={stats} />}
      {activeButton === "Moves" && <ModalPokemonsMove moves={moves} />}
      {activeButton === "Evolutions" && (
        <ModalPokemonAbilities abilities={abilities} />
      )}
    </div>
  );
};

export default ModalButtons;
