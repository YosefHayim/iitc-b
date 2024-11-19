import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./Moda.module.css";
import QueryStatsSharpIcon from "@mui/icons-material/QueryStatsSharp";
import ExperienceStat from "../ExperienceStat/Experiencestat";
import HeightStat from "../HeightStat/HeightStat";
import WeightStat from "../WeightStat/WeightStat";
import AbilitiesStats from "../AbilitiesStat/AbilitesStat";
import TypeStats from "../TypesStat/TypesStat";
import PokemonStats from "../PokemonStats/PokemonStats";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const styleButton = {
  borderRadius: "14px",
  fontWeight: "900",
  color: "white",
  bgcolor: "purple",
  width: "100%",
};

export default function PokemonViewButton({ pokemonData }) {
  console.log(pokemonData);

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
      <Button sx={styleButton} onClick={handleOpen}>
        Pokemon View
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2>{name} Information:</h2>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <div className={styles.StatsContainer}>
                <h3>Stats</h3>
                <QueryStatsSharpIcon />
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
