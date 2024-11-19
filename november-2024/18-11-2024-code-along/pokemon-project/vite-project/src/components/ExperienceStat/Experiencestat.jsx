import ExplicitIcon from "@mui/icons-material/Explicit";
import styles from "./ExperienceStat.module.css";

const ExperienceStat = ({ base_experience }) => {
  return (
    <div className={styles.ExperienceContainer}>
      <ExplicitIcon />
      <p>{base_experience}</p>
    </div>
  );
};

export default ExperienceStat;
