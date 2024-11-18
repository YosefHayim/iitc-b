import styles from "./PokemonStats.module.css";

const PokemonStats = ({ stats }) => {
  return (
    <div className={styles.StatsContainer}>
      <ul>
        {stats.map(({ base_stat, stat }, index) => (
          <li key={index}>
            {stat.name.toUpperCase()}: {base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonStats;
