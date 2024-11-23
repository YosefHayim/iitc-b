import styles from "./PokemonImage.module.css";

const PokemonImg = ({ pokemonImg, pokemonName }) => {
  return (
    <div>
      <div className={styles.ImgContainer}>
        <img src={pokemonImg} alt={pokemonName} className={styles.PokemonImg} />
      </div>
    </div>
  );
};

export default PokemonImg;
