import styles from "./ModalPokemonWnH.module.css";
import StraightenIcon from "@mui/icons-material/Straighten";
import ScaleIcon from "@mui/icons-material/Scale";
import ExplicitIcon from "@mui/icons-material/Explicit";

const ModalPokemonWnH = ({ height, weight, base_experience }) => {
  return (
    <div className={styles.WeightHeightPageContainer}>
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
      <div className={styles.ExperienceContainer}>
        <hr className={styles.ExperienceLineSeparator} />
        <div className={styles.InnerExperienceContainer}>
          <ExplicitIcon />
          <p className={styles.LightFont}>Base Experience: {base_experience}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalPokemonWnH;
