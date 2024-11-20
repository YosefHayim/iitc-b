import styles from "./ProgressSliderStats.module.css";

const ProgressSliderStats = ({ length, statName }) => {
  return (
    <div>
      <progress value={length} max={100} className={styles.statName}></progress>
    </div>
  );
};

export default ProgressSliderStats;
