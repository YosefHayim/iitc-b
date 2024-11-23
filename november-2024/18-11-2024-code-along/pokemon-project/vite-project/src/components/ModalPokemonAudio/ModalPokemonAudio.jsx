import styles from "./ModalPokemonAudio.module.css";

const ModalPokemonAudio = ({ cries }) => {
  return (
    <div className={styles.AudioContainer}>
      <div>{cries?.latest ? cries.latest : "null"}</div>
      <div>{cries?.legacy ? cries.legacy : "null"}</div>
    </div>
  );
};

export default ModalPokemonAudio;
