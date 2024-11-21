import styles from "./PokemonImage.module.css";

const PokemonImg = ({ PokemonImg }) => {
  return (
    <div className={styles.ImgContainer}>
      <img
        src={PokemonImg}
        alt="Pokemon Creature"
        className={styles.PokemonImg}
      />
    </div>
  );
};

export default PokemonImg;
