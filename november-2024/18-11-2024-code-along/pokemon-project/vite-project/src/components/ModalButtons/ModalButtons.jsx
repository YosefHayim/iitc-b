import styles from "./ModalButtons.module.css";

const ModalButtons = () => {
  return (
    <div className={styles.userOptionsChoiceView}>
      <div className={styles.aboutContainer}>
        <button className={styles.aboutButton}>About</button>
        <hr className={styles.animatedHr} />
      </div>

      <div className={styles.statsContainer}>
        <button className={styles.statsButton}>Stats</button>
        <hr className={styles.animatedHr} />
      </div>

      <div className={styles.movesContainer}>
        <button className={styles.movesButton}>Moves </button>
        <hr className={styles.animatedHr} />
      </div>

      <div className={styles.evolutionsContainer}>
        <button className={styles.evolutionsButton}>Evolutions</button>
        <hr className={styles.animatedHr} />
      </div>

      <div className={styles.locationsContainer}>
        <button className={styles.locationsButton}>Locations</button>
        <hr className={styles.animatedHr} />
      </div>
    </div>
  );
};

export default ModalButtons;
