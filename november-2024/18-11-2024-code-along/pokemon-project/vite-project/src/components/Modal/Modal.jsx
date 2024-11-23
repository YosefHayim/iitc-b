import * as React from "react";
import styles from "./Modal.module.css";

// Mui import
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import StraightenIcon from "@mui/icons-material/Straighten";
import ScaleIcon from "@mui/icons-material/Scale";

import getTypeBackground from "../../utils/getBackgroundType";
import capitalizeFirstLetter from "../../utils/firstLetterUppercase";
import { Link } from "react-router-dom";
import getStatNameBeauty from "../../utils/getStatNameBeauty";

export default function PokemonViewButton({ pokemonData }) {
  const { id, abilities, height, name, weight, stats, types, moves } =
    pokemonData;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          background: `url(${getTypeBackground(
            types[0]?.type.name || types[1]?.type.name || "default"
          )})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          color: "white",
          fontWeight: "100",
          borderRadius: "0.5em",
          textTransform: "none",
          "&:hover": {
            color: `black`,
          },
        }}
        onClick={handleOpen}
      >
        View Pokemon
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            borderRadius: "1em",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "black",
            boxShadow: 24,
            p: 4,
            borderRadius: "0.5em",
            padding: "2em",
            color: "white",
            textAlign: "center",
            background: "linear-gradient(to bottom, #373535, #000000)",
          }}
        >
          <h2 className={`${styles.PokemonName}`}>
            {capitalizeFirstLetter(name)} #{id}
          </h2>
          <div className={styles.TypesContainer}>
            {types.map((type) => (
              <div key={type.type.name} className={styles[type.type.name]}>
                {capitalizeFirstLetter(type.type.name)}
              </div>
            ))}
          </div>
          <div className={styles.userOptionsChoiceView}>
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
          </div>
          <div className={styles.StatContainer}>
            {stats.map((stat) => (
              <div key={stat.stat.name} className={styles.StatNameContainer}>
                <div className={styles.statContainerOfName}>
                  <h4 className={stat.stat.name}>
                    {getStatNameBeauty(stat.stat.name)}
                  </h4>
                </div>
                <div className={styles.statValue}>
                  <h4>{stat.base_stat}</h4>
                </div>
                <div className={styles.StatSliderValue}>
                  <progress
                    max={100}
                    value={stat.base_stat}
                    className={stat.stat.name}
                  ></progress>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.HeightAndWeightContainer}>
            <div className={styles.WeightContainer}>
              <div className={styles.AlignIconAndText}>
                <ScaleIcon />
                {weight} KG
              </div>
              <p className={styles.word}>Weight</p>
            </div>
            <hr className={styles.SeparatorForHeightAndWeight} />
            <div className={styles.HeightContainer}>
              <div className={styles.AlignIconAndText}>
                <StraightenIcon sx={{ rotate: "90deg" }} />
                {height} CM
              </div>
              <p className={styles.word}>Height</p>
            </div>
          </div>

          <div className={styles.movesContainer}>
            {moves.slice(0, 5).map((move) => (
              <div key={move.move.name}>
                <h4>
                  {capitalizeFirstLetter(move.move.name.replace(/-/g, " "))}
                </h4>
              </div>
            ))}
          </div>

          <div className={styles.abilitiesContainer}>
            {abilities.map((ability) => (
              <div key={ability.ability.name}>
                <h4>{capitalizeFirstLetter(ability.ability.name)}</h4>
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
