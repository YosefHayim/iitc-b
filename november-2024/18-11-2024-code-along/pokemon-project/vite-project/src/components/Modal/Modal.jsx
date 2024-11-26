import * as React from "react";
import styles from "./Modal.module.css";

// Mui import
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import capitalizeFirstLetter from "../../utils/firstLetterUppercase";
import ModalPokemonTypes from "../ModalPokemonTypes/ModalPokemonTypes";
import ModalButtons from "../ModalButtons/ModalButtons";
import buttonColorType from "../../utils/backgroundButtonColor";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "black",
  boxShadow: 24,
  p: 4,
  borderRadius: "0.5em",
  padding: "1em",
  color: "white",
  textAlign: "center",
  background: "linear-gradient(to bottom, #373535, #000000)",
  width: "20em",
  height: "35em",
};

export default function PokemonViewButton({ pokemonData }) {
  const { types, id, name } = pokemonData;

  const img = pokemonData?.sprites.other.dream_world.front_default;

  const buttonStyle = {
    background: `${buttonColorType(
      types[0]?.type.name || types[1]?.type.name
    )}`,
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
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={buttonStyle} onClick={handleOpen}>
        View Pokemon
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <h2 className={`${styles.PokemonName}`}>
            {capitalizeFirstLetter(name)} #{id}
          </h2>
          <img src={img} alt={name} className={styles.PokemonImg} />
          <ModalPokemonTypes types={types} />
          <ModalButtons pokemonData={pokemonData} />
        </Box>
      </Modal>
    </div>
  );
}
