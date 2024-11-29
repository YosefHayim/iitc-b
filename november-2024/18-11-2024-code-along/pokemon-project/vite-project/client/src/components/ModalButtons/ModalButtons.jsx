import { useState } from "react";
import ModalPokemonAbilities from "../ModalPokemonAbilities/ModalPokemonAbilities";
import ModalPokemonsMove from "../ModalPokemonsMoves/ModalPokemonsMove";
import ModalPokemonStats from "../ModalPokemonStats/ModalPokemonStats";
import ModalPokemonWnH from "../ModalPokemonWnH/ModalPokemonWnH";
import styles from "./ModalButtons.module.css";
import ModalPokemonAudio from "../ModalPokemonAudio/ModalPokemonAudio";

const ModalButtons = ({ pokemonData }) => {
  const { height, weight, stats, moves, abilities, cries } = pokemonData;

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
    <div className={styles.scrollerContainer}>
      <div className={styles.userOptionsChoiceView} onClick={toggleVisibility}>
        <div className={styles.PokemonTitlesData}>
          <div className={styles.aboutContainer}>
            <button className={styles.aboutButton}>About</button>
          </div>

          <div className={styles.statsContainer}>
            <button className={styles.statsButton}>Stats</button>
          </div>

          <div className={styles.movesContainer}>
            <button className={styles.movesButton}>Moves</button>
          </div>

          <div className={styles.abilitiesContainer}>
            <button className={styles.abilitiesButton}>Abilities</button>
          </div>

          <div className={styles.locationsContainer}>
            <button className={styles.locationsButton}>Locations</button>
          </div>

          <div className={styles.TemplateContainer}>
            <button className={styles.TemplateButton}>Species</button>
          </div>

          <div className={styles.TemplateContainer}>
            <button className={styles.TemplateButton}>Sounds</button>
          </div>
        </div>
        {activeButton === "About" && (
          <ModalPokemonWnH height={height} weight={weight} />
        )}
        {activeButton === "Stats" && <ModalPokemonStats stats={stats} />}
        {activeButton === "Moves" && <ModalPokemonsMove moves={moves} />}
        {activeButton === "Abilities" && (
          <ModalPokemonAbilities abilities={abilities} />
        )}
        {activeButton === "Sounds" && <ModalPokemonAudio cries={cries} />}
      </div>
    </div>
  );
};

export default ModalButtons;
