import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCardProfile from "../PokemonCardProfile/PokemonCardProfile";
import styles from "./Homepage.module.css";
import ViewPokemonSingleData from "../ViewPokemonSingleData/ViewPokemonSingleData";
import PaginationRounded from "../HomepagePagination/HomepagePagination";
import SearchAppBar from "../TopNavbar/TopNavbar";
import TemporaryDrawer from "../Drawer/Drawer";

const Homepage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [apiUrl, setApiUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`);
  const [maxPage, setMaxPage] = useState(0);

  const fetchData = async (url) => {
    try {
      const { data } = await axios.get(url);
      setPokemons(data.results);
      setApiUrl(data.next);
      setMaxPage(data.count);
    } catch (error) {
      console.error(`Error occurred while fetching API`, error);
    }
  };

  const handlePageChange = (page) => {
    const offset = (page - 1) * 20;
    const newUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
    fetchData(newUrl);
  };

  const handleInputChange = (e) => {
    let input = e.target.value;

    if (input.length > 3) {
    }
  };

  const handleClick = (e) => {
    console.log(e.target.value);

    setClick(true);
  };

  useEffect(() => {
    fetchData(apiUrl);
  }, []);

  return (
    <div className={styles.SearchBarContainer}>
      <SearchAppBar handleInputChange={handleInputChange} />
      <TemporaryDrawer />
      <PaginationRounded onPageChange={handlePageChange} maxPage={maxPage} />
      <div className={styles.PokemonCardsContainer}>
        {pokemons.map((pokemon) => (
          <div key={`${pokemon.name}`}>
            <PokemonCardProfile pokemonUrl={pokemon.url} />
            <ViewPokemonSingleData pokemonUrl={pokemon.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
