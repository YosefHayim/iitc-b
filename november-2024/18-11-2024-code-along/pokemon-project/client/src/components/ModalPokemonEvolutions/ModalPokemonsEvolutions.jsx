import axios from "axios";
import firstLetterUpperCase from "../../utils/firstLetterUppercase.js";
import styles from "./ModalPokemonsEvolutions.module.css";
import { useEffect, useState } from "react";

const ModalPokemonsEvolutions = ({ id, name }) => {
  const [evoPokemonsArray, setEvoPokemonsArray] = useState([]);

  const fetchChainData = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/evolution-chain/${id ? id : name}`
      );

      if (res.data) {
        const secondEvo = res.data.chain.evolves_to[0]?.species.name;
        const thirdEvo =
          res.data.chain.evolves_to[0]?.evolves_to[0]?.species.name;

        const evolutionNames = [secondEvo, thirdEvo];

        const evoPokemons = await Promise.all(
          evolutionNames.map(async (evoPokemon) => {
            const { data } = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${evoPokemon}/`
            );
            return {
              name: data.name,
              img: data.sprites.other.dream_world.front_default,
            };
          })
        );
        setEvoPokemonsArray(evoPokemons);
      }
    } catch (error) {
      console.error("Error occurred during Evolutions API call:", error);
    }
  };

  useEffect(() => {
    fetchChainData();
  }, []);

  return (
    <div className={styles.EvolutionContainer}>
      {evoPokemonsArray.map((pokemon, index) => (
        <div key={pokemon.name} className={styles.PokemonCard}>
          <img
            src={pokemon.img}
            alt={pokemon.name}
            className={styles.PokemonImg}
          />

          <p className={styles.fontLight}>
            Evolution #{index + 2}: {firstLetterUpperCase(pokemon.name)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ModalPokemonsEvolutions;
