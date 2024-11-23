import styles from "./ModalPokemonWnH.module.css";
import StraightenIcon from "@mui/icons-material/Straighten";
import ScaleIcon from "@mui/icons-material/Scale";
import { useRef } from "react";

const ModalPokemonWnH = ({ height, weight }) => {
  return (
    <div className={styles.HeightAndWeightContainer}>
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
    </div>
  );
};

export default ModalPokemonWnH;
