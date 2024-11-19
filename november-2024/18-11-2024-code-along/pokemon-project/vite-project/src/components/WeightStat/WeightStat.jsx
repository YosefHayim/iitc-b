import ScaleIcon from "@mui/icons-material/Scale";
import styles from "./WeightStat.module.css";

const WeightStat = ({ weight }) => {
  return (
    <div className={styles.WeightContainer}>
      <ScaleIcon />
      <p>{weight}</p>
    </div>
  );
};

export default WeightStat;
