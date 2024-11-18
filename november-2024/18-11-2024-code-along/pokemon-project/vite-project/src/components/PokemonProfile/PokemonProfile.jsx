/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./PokemonProfile.module.css";
import PokemonType from "../PokemonType/PokemonType";
import PokemonImg from "../PokemonImage/PokemonImage";
import PokemonNameAndId from "../PokemonNameAndId/PokemonNameAndId";
import getTypeBackground from "../../utils/getBackgroundType.js";

const PokemonProfile = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async (pokemonUrl) => {
    const { data } = await axios.get(pokemonUrl);
    setPokemon(data);
    console.log(pokemon);
  };

  useEffect(() => {
    fetchData(pokemonUrl);
  }, []);

  return (
    pokemon && (
      <div
        key={pokemon.name}
        className={styles.PokemonCard}
        style={{
          backgroundImage: `url(${getTypeBackground(
            pokemon.types[0]?.type.name || "default"
          )})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <PokemonNameAndId pokemonName={pokemon.name} pokemonId={pokemon.id} />
        <PokemonImg
          PokemonImg={pokemon.sprites.other.dream_world.front_default}
        />
        <PokemonType types={pokemon.types} />
      </div>
    )
  );
};

export default PokemonProfile;
