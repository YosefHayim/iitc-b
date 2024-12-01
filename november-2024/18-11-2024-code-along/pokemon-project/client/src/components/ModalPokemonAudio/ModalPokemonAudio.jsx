import styles from "./ModalPokemonAudio.module.css";

const ModalPokemonAudio = ({ cries }) => {
  return (
    <div>
      <audio controls className={styles.AudioContainer}>
        <source src={cries?.latest || "null"} type="audio/mpeg" />
        <source src={cries?.legacy || "null"} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default ModalPokemonAudio;
