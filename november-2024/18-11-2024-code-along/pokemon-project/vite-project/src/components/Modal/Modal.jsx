import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./Moda.module.css";
import getStatTypeImage from "../../utils/getStatTypeImage";
import QueryStatsSharpIcon from "@mui/icons-material/QueryStatsSharp";
import ExplicitIcon from "@mui/icons-material/Explicit";
import ScaleIcon from "@mui/icons-material/Scale";
import HeightIcon from "@mui/icons-material/Height";
import IOSSlider from "../Slider/Slider";

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
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <div className={styles.StatsContainer}>
                <h3>Stats</h3>
                <QueryStatsSharpIcon />
                <div className={style.ExperienceContainer}>
                  <h3>{base_experience}</h3>
                  <ExplicitIcon />
                </div>
                <div className={style.HeightContainer}>
                  <h3>{height}</h3>
                  <HeightIcon />
                </div>
                <div className={styles.WeightContainer}>
                  <h3>{weight}</h3>
                  <ScaleIcon />
                </div>
              </div>
              <div className={styles.statsContainer}>
                {stats.map((stat) => {
                  return (
                    <div key={stat.stat.name} className={styles.StatContainer}>
                      <div className={styles.StatImgContainer}>
                        <img
                          src={getStatTypeImage(stat.stat.name)}
                          alt={stat.stat.name}
                          className={styles.StatImg}
                        />
                      </div>
                      <div>
                        <IOSSlider length={stat.base_stat} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
