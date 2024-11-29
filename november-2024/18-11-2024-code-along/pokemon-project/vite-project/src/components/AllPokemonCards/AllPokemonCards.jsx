import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./AllPokemonCards.module.css";
import PokemonCardProfile from "../PokemonCardProfile/PokemonCardProfile";
import ViewPokemonSingleData from "../ViewPokemonSingleData/ViewPokemonSingleData";
import PaginationRounded from "../HomepagePagination/HomepagePagination";
import Loading from "../Loading/Loading";

const AllPokemonCards = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentApiUrl, setApiUrl] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(39);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = currentApiUrl || `https://pokeapi.co/api/v2/pokemon/`;
      const { data } = await axios.get(url);
      setPokemons(data.results);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
      setMaxPage(Math.ceil(data.count / 20));
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const offset = (page - 1) * 20;
    const newUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
    setApiUrl(newUrl);
  };

  useEffect(() => {
    fetchData();
  }, [currentApiUrl]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <PaginationRounded
            setCurrentPage={handlePageChange}
            maxPage={maxPage}
            currentPage={currentPage}
          />

          <div className={styles.PokemonCardsContainer}>
            {Array.isArray(pokemons) && pokemons.length > 0 ? (
              pokemons.map((pokemon) => (
                <div key={pokemon.name}>
                  <PokemonCardProfile pokemonUrl={pokemon.url} />
                  <ViewPokemonSingleData pokemonUrl={pokemon.url} />
                </div>
              ))
            ) : (
              <h1>No Pokémon available</h1>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AllPokemonCards;
