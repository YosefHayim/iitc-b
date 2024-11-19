import ScaleIcon from "@mui/icons-material/Scale";
import styles from "./WeightStat.module.css";

const WeightStat = ({ weight }) => {
  return (
    <div className={styles.WeightContainer}>
      <h3>{weight}</h3>
      <ScaleIcon />
    </div>
  );
};

export default WeightStat;
