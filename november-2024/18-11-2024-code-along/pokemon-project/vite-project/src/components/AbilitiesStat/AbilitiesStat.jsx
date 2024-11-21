import AccountTreeIcon from "@mui/icons-material/AccountTree";
import styles from "./AbilitiesStat.module.css";

const AbilitiesStats = ({ abilities }) => {
  return (
    <div className={styles.AbilitiesContainer}>
      <AccountTreeIcon />
      {abilities.map((ability) => (
        <div key={ability.ability.name}>
          {ability.ability.name.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default AbilitiesStats;
