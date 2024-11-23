import * as React from "react";
import styles from "./Modal.module.css";

// Mui import
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import getTypeBackground from "../../utils/getBackgroundType";

const style = {
  borderRadius: "1em",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: "0.5em",
  padding: "2em",
};

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
          fontWeight: "900",
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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p className={styles.PokemonName}>{name}</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className={styles.PokemonDataContainer}>
              <div className={styles.StatsContainer}></div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
