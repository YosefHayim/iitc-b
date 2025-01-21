import { useParams } from "react-router-dom";
import styles from "./Tech.module.css";

const Tech = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className={styles.TechPage}>
      <h1>Tech page: {id}</h1>
    </div>
  );
};

export default Tech;
