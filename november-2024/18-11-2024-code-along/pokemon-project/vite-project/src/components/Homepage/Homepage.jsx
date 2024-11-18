import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCardProfile from "../PokemonCardProfile/PokemonCardProfile";
import styles from "./Homepage.module.css";
import TopNavbar from "../TopNavbar/TopNavbar";

const Homepage = () => {
  const [pokemons, setPokemons] = useState([]);

  const clickPokemonCard = (e) => {
    e.preventDefault();
    const pokemonCard = e.target.closest("div");

    if (pokemonCard) {
      console.log(`clicked`);
    }
  };

  const fetchData = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
      setPokemons(results);
    } catch (error) {
      console.error(`Error ocurred while fetching API`, error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.PokemonCardsContainer} onClick={clickPokemonCard}>
      <TopNavbar />
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={`pokemonId-${index}`}>
            <PokemonCardProfile pokemonUrl={pokemon.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
