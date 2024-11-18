import axios from "axios";
import { useEffect, useState } from "react";
import PokemonProfile from "../PokemonProfile/PokemonProfile";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchData = async () => {
    const {
      data: { results },
    } = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    setPokemons(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.PokemonCardsContainer}>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={`pokemonId-${index}`}>
            <PokemonProfile pokemonUrl={pokemon.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
