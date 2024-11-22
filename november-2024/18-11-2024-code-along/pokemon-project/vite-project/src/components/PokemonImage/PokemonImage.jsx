import styles from "./PokemonImage.module.css";

const PokemonImg = ({ pokemonImg, pokemonName }) => {
  return (
    <div className={styles.ImgContainer}>
      <img src={pokemonImg} alt={pokemonName} className={styles.PokemonImg} />
    </div>
  );
};

export default PokemonImg;
