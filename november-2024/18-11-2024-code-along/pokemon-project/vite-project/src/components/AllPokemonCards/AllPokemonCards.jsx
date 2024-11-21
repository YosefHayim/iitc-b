import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./AllPokemonCards.module.css";
import PokemonCardProfile from "../PokemonCardProfile/PokemonCardProfile";
import ViewPokemonSingleData from "../ViewPokemonSingleData/ViewPokemonSingleData";
import PaginationRounded from "../HomepagePagination/HomepagePagination";
import Loading from "../Loading/Loading";

const AllPokemonCards = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentApiUrl, setApiUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/`
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(39);
  const [loading, setLoading] = useState(false);

  const fetchData = async (currentApiUrl) => {
    setLoading(true);
    try {
      const { data } = await axios.get(currentApiUrl);
      setPokemons(data.results);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
    } catch (error) {
      console.error(`Error occurred while fetching API`, error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const offset = (page - 1) * 20;
    const newUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
    setApiUrl(newUrl);
  };

  useEffect(() => {
    fetchData(currentApiUrl);
  }, [currentApiUrl]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <PaginationRounded
            onPageChange={handlePageChange}
            maxPage={maxPage}
            currentPage={currentPage}
          />

          <div className={styles.PokemonCardsContainer}>
            {pokemons.map((pokemon) => (
              <div key={pokemon.name}>
                <PokemonCardProfile pokemonUrl={pokemon.url} />
                <ViewPokemonSingleData pokemonUrl={pokemon.url} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllPokemonCards;
