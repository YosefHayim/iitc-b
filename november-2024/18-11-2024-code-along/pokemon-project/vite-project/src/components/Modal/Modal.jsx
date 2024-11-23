import * as React from "react";
import styles from "./Modal.module.css";
import { useState } from "react";

// Mui import
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import getTypeBackground from "../../utils/getBackgroundType";
import capitalizeFirstLetter from "../../utils/firstLetterUppercase";
import ModalPokemonTypes from "../ModalPokemonTypes/ModalPokemonTypes";
import ModalButtons from "../ModalButtons/ModalButtons";
import ModalPokemonStats from "../ModalPokemonStats/ModalPokemonStats";
import ModalPokemonWnH from "../ModalPokemonWnH/ModalPokemonWnH";
import ModalPokemonsMove from "../ModalPokemonsMoves/ModalPokemonsMove";
import ModalPokemonAbilities from "../ModalPokemonAbilities/ModalPokemonAbilities";

export default function PokemonViewButton({ pokemonData }) {
  const { types, id, name } = pokemonData;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [display, setDisplay] = useState(false);

  return (
    <div>
      <Button
        sx={{
          background: `url(${getTypeBackground(
            types[0]?.type.name || types[1]?.type.name
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
            height: "30em",
          }}
        >
          <h2 className={`${styles.PokemonName}`}>
            {capitalizeFirstLetter(name)} #{id}
          </h2>
          <ModalPokemonTypes types={types} />
          <ModalButtons pokemonData={pokemonData} />
        </Box>
      </Modal>
    </div>
  );
}
