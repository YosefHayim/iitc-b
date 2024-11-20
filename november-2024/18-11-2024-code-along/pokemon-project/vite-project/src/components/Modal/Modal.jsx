import * as React from "react";
import styles from "./Modal.module.css";
import WeightStat from "../WeightStat/WeightStat";
import HeightStat from "../HeightStat/HeightStat";
import ExperienceStat from "../ExperienceStat/ExperienceStat";
import AbilitiesStats from "../AbilitiesStat/AbilitiesStat";
import TypeStats from "../TypesStat/TypesStat";
import PokemonStats from "../PokemonStats/PokemonStats";

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
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

const styleButton = {
  borderRadius: "14px",
  fontWeight: "900",
  color: "white",
  bgcolor: "black",
  "&:hover": {
    color: "black",
    bgcolor: "#f4f4f4",
  },
  width: "100%",
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
          backgroundImage: `url(${getTypeBackground(
            types[0]?.type.name || types[1]?.type.name || "default"
          )})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          color: "white",
          fontWeight: "900",
          borderRadius: "0.5em",
          "&:hover": {
            backgroundImage: `url('public/images/blackly-background-button.png')`,
          },
        }}
        onClick={handleOpen}
      >
        <p>View {name}</p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p className={styles.PokemonName}>{name.toUpperCase()}</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <div className={styles.StatsContainer}>
                <ExperienceStat base_experience={base_experience} />
                <HeightStat height={height} />
                <WeightStat weight={weight} />
                <AbilitiesStats abilities={abilities} />
                <TypeStats types={types} />
                <PokemonStats stats={stats} />
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
