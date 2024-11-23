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

export default function PokemonViewButton({ pokemonData }) {
  const {
    abilities,
    base_experience,
    height,
    name,
    weight,
    stats,
    types,
    species,
  } = pokemonData;

  console.log(pokemonData);

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
            width: "100%",
            bgcolor: "black",
            boxShadow: 24,
            p: 4,
            borderRadius: "0.5em",
            padding: "2em",
            color: "white",
            textAlign: "center",
          }}
        >
          <h2 className={`${styles.PokemonName}`}>
            {capitalizeFirstLetter(name)}
          </h2>

          <div className={styles.TypesContainer}>
            {types.map((type) => (
              <div className={styles[type.type.name]}>
                {capitalizeFirstLetter(type.type.name)}
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
        </Box>
      </Modal>
    </div>
  );
}
