import { useEffect, useState } from "react";
import styles from "./Error404.module.css";
import PikachuCoolImage from "/images/pikachu-against-evil-pokemon.svg";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className={styles.ErrorContainerPage}>
          <h1 className={styles.PageTitle}>Pika pika pikachu! wrong page!</h1>
          <img
            src={PikachuCoolImage}
            alt="Pikachu against evil pokemon"
            className={styles.PikachuCoolImage}
          />
          <button
            className={styles.navigateHomeBtn}
            onClick={() => navigate("/")}
          >
            Navigate home
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Error404;
