import CategorySharpIcon from "@mui/icons-material/CategorySharp";
import styles from "./AbilitiesStat.module.css";

const AbilitiesStats = ({ abilities }) => {
  return (
    <div className={styles.AbilitiesContainer}>
      <CategorySharpIcon />
      {abilities.map((ability) => (
        <div key={ability.ability.name}>{ability.ability.name}</div>
      ))}
    </div>
  );
};

export default AbilitiesStats;
