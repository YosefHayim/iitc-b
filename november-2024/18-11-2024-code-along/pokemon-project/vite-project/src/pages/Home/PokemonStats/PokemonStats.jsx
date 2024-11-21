import styles from "./PokemonStats.module.css";
import getStatTypeImage from "../../../utils/getStatTypeImage";
import ProgressSliderStats from "../ProgressStatsSliders/ProgressSliderStats";

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
              <ProgressSliderStats
                statName={stat.stat.name}
                length={stat.base_stat}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonStats;
