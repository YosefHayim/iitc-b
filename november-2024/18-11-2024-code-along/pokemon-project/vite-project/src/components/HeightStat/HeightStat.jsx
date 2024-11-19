import HeightIcon from "@mui/icons-material/Height";
import styles from "./HeightStat.module.css";

const HeightStat = ({ height }) => {
  return (
    <div className={styles.HeightContainer}>
      <h3>{height}</h3>
      <HeightIcon />
    </div>
  );
};

export default HeightStat;
