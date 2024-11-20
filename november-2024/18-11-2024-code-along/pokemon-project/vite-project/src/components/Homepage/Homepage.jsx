import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCardProfile from "../PokemonCardProfile/PokemonCardProfile";
import styles from "./Homepage.module.css";
import ViewPokemonSingleData from "../ViewPokemonSingleData/ViewPokemonSingleData";
import PaginationRounded from "../HomepagePagination/HomepagePagination";
import SearchAppBar from "../TopNavbar/TopNavbar";

const Homepage = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchData = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
      setPokemons(results);
    } catch (error) {
      console.error(`Error occurred while fetching API`, error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.SearchBarContainer}>
      <SearchAppBar />
      <div className={styles.PokemonCardsContainer}>
        {pokemons.map((pokemon) => (
          <div key={`${pokemon.name}`}>
            <PokemonCardProfile pokemonUrl={pokemon.url} />
            <ViewPokemonSingleData pokemonUrl={pokemon.url} />
          </div>
        ))}
        <PaginationRounded />
      </div>
    </div>
  );
};

export default Homepage;
