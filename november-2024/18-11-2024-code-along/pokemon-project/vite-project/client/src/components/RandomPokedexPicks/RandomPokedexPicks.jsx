import { useEffect, useState } from "react";
import styles from "./RandomPokedexPicks.module.css";
import randomizeArray from "../../utils/randomArrayNumbers";
import axios from "axios";
import PokemonViewButton from "../Modal/Modal";

const RandomPokedexPicks = () => {
  const [randomArray, setRandomArray] = useState(randomizeArray());

  const [randomPokemons, setRandomPokemons] = useState([]);

  const fetchData = async (randomArray) => {
    try {
      const results = await Promise.all(
        randomArray.map((n) =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${n}`)
        )
      );
      const threeRandomPokemons = results?.map((res) => res.data);
      setRandomPokemons(threeRandomPokemons);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  useEffect(() => {
    fetchData(randomArray);
  }, []);

  return (
    <div>
      <h2 className={styles.PopularPokedexPicks}>Popular Pokedex Picks</h2>
      <div>
        <hr className={styles.HomeUnderLine} />
        <div className={styles.RandomPokedexContainer}>
          {randomPokemons.map((pokemonData) => (
            <div key={pokemonData.name}>
              <div
                className={
                  styles[
                    pokemonData.types[0]?.type.name ||
                      pokemonData.types[1]?.type.name
                  ]
                }
              >
                <img
                  className={styles.pokemonHomeImg}
                  src={pokemonData.sprites.other.home.front_default}
                  alt={pokemonData.name}
                />
              </div>
              <PokemonViewButton pokemonData={pokemonData} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomPokedexPicks;
