import { useState } from "react";
import ModalPokemonAbilities from "../ModalPokemonAbilities/ModalPokemonAbilities";
import ModalPokemonsMove from "../ModalPokemonsMoves/ModalPokemonsMove";
import ModalPokemonStats from "../ModalPokemonStats/ModalPokemonStats";
import ModalPokemonWnH from "../ModalPokemonWnH/ModalPokemonWnH";
import styles from "./ModalButtons.module.css";
import ModalPokemonAudio from "../ModalPokemonAudio/ModalPokemonAudio";
import ModalPokemonsEvolutions from "../ModalPokemonEvolutions/ModalPokemonsEvolutions";

const ModalButtons = ({ pokemonData }) => {
  const {
    height,
    weight,
    stats,
    moves,
    abilities,
    cries,
    base_experience,
    id,
    name,
  } = pokemonData;

  const [activeButton, setActiveButton] = useState("Stats");

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
            <button
              className={styles.aboutButton}
              style={{
                fontWeight: activeButton === "About" ? 500 : "100",
              }}
            >
              About
            </button>
          </div>

          <div className={styles.statsContainer}>
            <button
              className={styles.statsButton}
              style={{
                fontWeight: activeButton === "Stats" ? 500 : "100",
              }}
            >
              Stats
            </button>
          </div>

          <div className={styles.movesContainer}>
            <button
              className={styles.movesButton}
              style={{
                fontWeight: activeButton === "Moves" ? 500 : "100",
              }}
            >
              Moves
            </button>
          </div>

          <div className={styles.TemplateContainer}>
            <button
              className={styles.TemplateButton}
              style={{
                fontWeight: activeButton === "Evolutions" ? 500 : "100",
              }}
            >
              Evolutions
            </button>
          </div>

          <div className={styles.abilitiesContainer}>
            <button
              className={styles.abilitiesButton}
              style={{
                fontWeight: activeButton === "Abilities" ? 500 : "100",
              }}
            >
              Abilities
            </button>
          </div>

          <div className={styles.locationsContainer}>
            <button
              className={styles.locationsButton}
              style={{
                fontWeight: activeButton === "Locations" ? 500 : "100",
              }}
            >
              Locations
            </button>
          </div>

          <div className={styles.TemplateContainer}>
            <button
              className={styles.TemplateButton}
              style={{
                fontWeight: activeButton === "Species" ? 500 : "100",
              }}
            >
              Species
            </button>
          </div>

          <div className={styles.TemplateContainer}>
            <button
              className={styles.TemplateButton}
              style={{
                fontWeight: activeButton === "Sounds" ? 500 : "100",
              }}
            >
              Sounds
            </button>
          </div>
        </div>
        {activeButton === "About" && (
          <ModalPokemonWnH
            height={height}
            weight={weight}
            base_experience={base_experience}
          />
        )}
        {activeButton === "Stats" && <ModalPokemonStats stats={stats} />}
        {activeButton === "Evolutions" && (
          <ModalPokemonsEvolutions id={id} name={name} />
        )}
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
