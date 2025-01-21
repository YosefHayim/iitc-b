import { Outlet } from "react-router-dom";
import styles from "./Articles.module.css";

const Articles = () => {
  return (
    <div className={styles.articlesContainer}>
      <h1>Articles Page</h1>
      <Outlet />
    </div>
  );
};

export default Articles;
