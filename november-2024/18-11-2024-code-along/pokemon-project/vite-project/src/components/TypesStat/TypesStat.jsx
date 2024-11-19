import MaleSharpIcon from "@mui/icons-material/MaleSharp";
import styles from "./TypeStat.module.css";

const TypeStats = ({ types }) => {
  return (
    <div className={styles.TypesContainer}>
      <MaleSharpIcon />
      {types.map((type) => (
        <div key={type.type.name}>{type.type.name}</div>
      ))}
    </div>
  );
};

export default TypeStats;
