import { useEffect, useState } from "react";
import styles from "./RandomPokedexPicks.module.css";
import randomizeArray from "../../utils/randomArrayNumbers";
import axios from "axios";

const RandomPokedexPicks = () => {
  const [randomArray, setRandomArray] = useState([]);
  const [randomPokemons, setRandomPokemons] = useState([]);

  useEffect(() => {
    setRandomArray(randomizeArray());
  }, []);

  const fetchData = async (arrayRandomN) => {
    try {
      const results = await Promise.all(
        arrayRandomN.map((n) =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${n}`)
        )
      );
      const threeRandomPokemons = results?.map((res) => res.data);
      setRandomPokemons(threeRandomPokemons);
      console.log(threeRandomPokemons);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  useEffect(() => {
    fetchData(randomArray);
  }, [randomArray]);

  return (
    <div>
      <h2 className={styles.PopularPokedexPicks}>Popular Pokedex Picks</h2>
      <div>
        <hr className={styles.HomeUnderLine} />
        <div className={styles.RandomPokedexContainer}>
          {randomPokemons.map((pokemon) => (
            <div key={pokemon?.name}>{pokemon?.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomPokedexPicks;
