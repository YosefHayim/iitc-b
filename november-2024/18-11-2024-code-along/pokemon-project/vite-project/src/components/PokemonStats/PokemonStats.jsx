import styles from "./PokemonStats.module.css";
import StatsSlider from "../Slider/Slider";
import getStatTypeImage from "../../utils/getStatTypeImage";

const PokemonStats = ({ stats }) => {
  return (
    <div className={styles.statsContainer}>
      {stats.map((stat) => {
        return (
          <div key={stat.stat.name} className={styles.StatContainer}>
            <div className={styles.StatImgContainer}>
              <img
                src={getStatTypeImage(stat.stat.name)}
                alt={stat.stat.name}
                className={styles.StatImg}
              />
            </div>
            <div>
              <StatsSlider length={stat.base_stat} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonStats;
