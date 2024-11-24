import styles from "./ModalPokemonAudio.module.css";

const ModalPokemonAudio = ({ cries }) => {
  return (
    <div className={styles.AudioContainer}>
      <audio controls>
        <source src={cries?.latest || "null"} type="audio/mpeg" />
        <source src={cries?.legacy || "null"} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default ModalPokemonAudio;
