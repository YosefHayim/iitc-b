import getStatNameBeauty from "../../utils/getStatNameBeauty";
import styles from "./ModalPokemonStats.module.css";

const ModalPokemonStats = ({ stats }) => {
  return (
    <div className={styles.StatContainer}>
      <div className={styles.StatContainer}>
        {stats.map((stat) => (
          <div key={stat.stat.name} className={styles.StatNameContainer}>
            <div className={styles.statContainerOfName}>
              <h4 className={stat.stat.name}>
                {getStatNameBeauty(stat.stat.name)}
              </h4>
            </div>
            <div className={styles.statValue}>
              <h4>{stat.base_stat}</h4>
            </div>
            <div className={styles.StatSliderValue}>
              <progress
                max={100}
                value={stat.base_stat}
                className={styles[stat.stat.name]}
              ></progress>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalPokemonStats;
