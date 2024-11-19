import ExplicitIcon from "@mui/icons-material/Explicit";
import styles from "./Experiencestat.module.css";

const ExperienceStat = ({ base_experience }) => {
  return (
    <div className={styles.ExperienceContainer}>
      <h3>{base_experience}</h3>
      <ExplicitIcon />
    </div>
  );
};

export default ExperienceStat;
