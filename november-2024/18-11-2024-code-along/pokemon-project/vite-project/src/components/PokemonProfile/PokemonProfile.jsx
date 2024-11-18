/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./PokemonProfile.module.css";

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
      <div>
        <div key={pokemon.name} className={styles.PokemonCard}>
          <h1>{pokemon.name} Card Viewer</h1>
          <h2>ID: {pokemon.id}</h2>

          <div className={styles.TypesContainer}>
            <h2>Types:</h2>
            <ul>
              {pokemon.types.map(({ type }, index) => (
                <li key={index}>{type.name}</li>
              ))}
            </ul>
          </div>
          <div className={styles.ImgContainer}>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt="Pokemon Creature"
            />
          </div>
          <div className={styles.weight}>
            <h2>Pokemon Weight: {pokemon.weight}</h2>
          </div>
          <div className={styles.BaseExperienceContainer}>
            <h2>Experience: {pokemon.base_experience}</h2>
          </div>
          <div className={styles.AbilitiesContainer}>
            <h2>Abilities:</h2>
            <ul>
              {pokemon.abilities.map(({ ability }, index) => (
                <li key={index}>{ability.name}</li>
              ))}
            </ul>
          </div>
          <div className={styles.StatsContainer}>
            <ul>
              {pokemon.stats.map(({ base_stat, stat }, index) => (
                <li key={index}>
                  {stat.name.toUpperCase()}: {base_stat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default PokemonProfile;
