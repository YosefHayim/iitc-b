import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./AllPokemonCards.module.css";
import PokemonCardProfile from "../PokemonCardProfile/PokemonCardProfile";
import ViewPokemonSingleData from "../ViewPokemonSingleData/ViewPokemonSingleData";
import PaginationRounded from "../HomepagePagination/HomepagePagination";
import Loading from "../Loading/Loading";

const AllPokemonCards = ({ randomPokemons }) => {
<<<<<<< HEAD
  console.log(randomPokemons);

=======
>>>>>>> f673e26a590e55004ba98c55f0fc97621f440ade
  const [pokemons, setPokemons] = useState([]);
  const [currentApiUrl, setApiUrl] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(39);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    if (randomPokemons.length > 0) {
      setPokemons(randomPokemons);
      setLoading(false);
    } else {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
        setPokemons(data.results);
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
        setMaxPage(data.count);
        setLoading(false);
      } catch (error) {
        console.error(`Error occurred while fetching API`, error);
      }
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

  useEffect(() => {
    if (randomPokemons?.length > 0) {
      setPokemons(randomPokemons);
      setLoading(false);
    }
  }, [randomPokemons]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <PaginationRounded
            onPageChange={handlePageChange ? handlePageChange : null}
            maxPage={maxPage ? maxPage : null}
            currentPage={currentPage ? currentPage : null}
          />

          <div className={styles.PokemonCardsContainer}>
            {Array.isArray(pokemons) ? (
              pokemons.map((pokemon) => (
                <div key={pokemon.name}>
                  <PokemonCardProfile pokemonUrl={pokemon.url} />
                  <ViewPokemonSingleData pokemonUrl={pokemon.url} />
                </div>
              ))
            ) : (
              <div>
                <h1>No pokemon's available or invalid data</h1>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AllPokemonCards;
