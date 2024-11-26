import { useEffect, useState } from "react";
import styles from "./RandomPokedexPicks.module.css";
import randomizeArray from "../../utils/randomArrayNumbers";
import axios from "axios";

const RandomPokedexPicks = () => {
  const [randomArray, setRandomArray] = useState([]);

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
      console.log(results.map((res) => res.data));
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
    setPokemonsUrl(pokemonsUrl);
  };

  useEffect(() => {
    if (randomArray.length > 0) {
      fetchData(randomArray);
    }
  }, [randomArray]);

  return (
    <div>
      <h2 className={styles.PopularPokedexPicks}>Popular Pokedex Picks</h2>
      <div className={styles.PokedexRandomPicksContainer}>
        <hr className={styles.HomeUnderLine} />
      </div>
    </div>
  );
};

export default RandomPokedexPicks;
