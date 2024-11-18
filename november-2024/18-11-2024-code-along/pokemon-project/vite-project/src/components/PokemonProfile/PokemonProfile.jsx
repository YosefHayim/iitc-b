/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./PokemonProfile.module.css";
import PokemonType from "../PokemonType/PokemonType";
import PokemonImg from "../PokemonImage/PokemonImage";
import PokemonWeight from "../PokemonWeight/PokemonWeight";
import PokemonAbilities from "../PokemonAbilities/PokemonAbilities";
import PokemonStats from "../PokemonStats/PokemonStats";
import PokemonExperience from "../PokemonExperience/PokemonExperience";
import PokemonNameAndId from "../PokemonNameAndId/PokemonNameAndId";

const PokemonProfile = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async (pokemonUrl) => {
    const { data } = await axios.get(pokemonUrl);
    setPokemon(data);
  };

  useEffect(() => {
    fetchData(pokemonUrl);
  }, []);

  console.log(pokemon);

  return (
    pokemon && (
      <div key={pokemon.name} className={styles.PokemonCard}>
        <PokemonNameAndId pokemonName={pokemon.name} pokemonId={pokemon.id} />
        <PokemonType types={pokemon.types} />
        <PokemonImg
          PokemonImg={pokemon.sprites.other.dream_world.front_default}
        />
        <PokemonWeight weight={pokemon.weight} />
        <PokemonExperience experience={pokemon.base_experience} />
        <PokemonAbilities abilities={pokemon.abilities} />
        <PokemonStats stats={pokemon.stats} />
      </div>
    )
  );
};

export default PokemonProfile;
