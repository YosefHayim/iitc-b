import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./PokemonCardProfile.module.css";
import getTypeBackground from "../../utils/getBackgroundType.js";
import capitalizeFirstLetter from "../../utils/firstLetterUppercase.js";

const PokemonCardProfile = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async (pokemonUrl) => {
    try {
      const { data } = await axios.get(pokemonUrl);
      setPokemon(data);
    } catch (error) {
      console.error(`Error occurred while fetching API data`, error);
    }
  };

  useEffect(() => {
    fetchData(pokemonUrl);
  }, []);

  return (
    pokemon && (
      <div
        key={pokemon.name}
        className={styles[pokemon.types[0]?.type.name || types[1]?.type.name]}
      >
        <div className={styles.PokemonNameAndIdContainer}>
          <h2 className={styles.name}>{capitalizeFirstLetter(pokemon.name)}</h2>
          <h2 className={styles.id}>#{pokemon.id}</h2>
        </div>
        <div className={styles.ImgContainer}>
          <img
            src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name}
            className={styles.pokemonImg}
          />
        </div>
      </div>
    )
  );
};

export default PokemonCardProfile;
