import axios from "axios";
import PokemonViewButton from "../Modal/Modal";
import styles from "./ViewPokemonSingleData.module.css";
import { useState, useEffect } from "react";

const ViewPokemonSingleData = ({ pokemonUrl }) => {
  const [isClicked, setClick] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  const handleClick = () => {
    setClick(true);
  };

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
      <div className={styles.PokemonViewSingleDataContainer}>
        <PokemonViewButton onClick={handleClick} pokemonData={pokemon} />
      </div>
    )
  );
};

export default ViewPokemonSingleData;
