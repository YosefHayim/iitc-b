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
  const [currentApiUrl, setApiUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/`
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [maxPage, setMaxPage] = useState(50);

  const fetchData = async (url) => {
    try {
      const { data } = await axios.get(url);
      setPokemons(data.results);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
    } catch (error) {
      console.error(`Error occurred while fetching API`, error);
    }
  };

  const handlePageChange = (page) => {
    const offset = (page - 1) * 20;
    const newUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
    setApiUrl(newUrl); 
  };

  const handleInputChange = (inputValue) => {
    console.log(`Search input value: ${inputValue}`);
  };

  useEffect(() => {
    fetchData(currentApiUrl);
  }, [currentApiUrl]);

  return (
    <div className={styles.SearchBarContainer}>
      <SearchAppBar handleInputChange={handleInputChange} />
      <TemporaryDrawer />
      <PaginationRounded onPageChange={handlePageChange} maxPage={maxPage} />
      <div className={styles.PokemonCardsContainer}>
        {pokemons.map((pokemon) => (
          <div key={pokemon.name}>
            <PokemonCardProfile pokemonUrl={pokemon.url} />
            <ViewPokemonSingleData pokemonUrl={pokemon.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
