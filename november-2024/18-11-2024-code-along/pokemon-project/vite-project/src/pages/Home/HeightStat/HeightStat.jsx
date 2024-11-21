import HeightIcon from "@mui/icons-material/Height";
import styles from "./HeightStat.module.css";

const HeightStat = ({ height }) => {
  return (
    <div className={styles.HeightContainer}>
      <HeightIcon />
      <p >{height}</p>
      <p className={styles.CM}>CM</p>
    </div>
  );
};

export default HeightStat;
