import styles from "./SearchForPokemon.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import ModalButtons from "../../components/ModalButtons/ModalButtons";

const SearchForPokemon = () => {
  const { input } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${input}`;

  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setPokemonData(data);
      setLoading(false);
    } catch (error) {
      console.error(`Error occurred while fetching API`, error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [input]);

  const name = pokemonData?.name;
  const img = pokemonData?.sprites.other.dream_world.front_default;

  return (
    <div className={styles.SearchPageContainer}>
      {loading ? (
        <Loading />
      ) : pokemonData ? (
        <>
          <h2 className={styles.SearchResultTitle}>
            Result for: "{input}" Pokemon
          </h2>
          <div className={styles.SearchPokemonContainer}>
            <div className={styles.ImageContainer}>
              <img
                src={img}
                alt="Pokemon image"
                className={styles.PokemonImg}
              />
            </div>
            <ModalButtons pokemonData={pokemonData} />
          </div>
        </>
      ) : (
        <p>Pokemon not found or invalid input.</p>
      )}
    </div>
  );
};

export default SearchForPokemon;
