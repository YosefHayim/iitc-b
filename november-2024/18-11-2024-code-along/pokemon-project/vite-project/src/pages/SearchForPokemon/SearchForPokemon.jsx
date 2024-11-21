import styles from "./SearchForPokemon.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

const SearchForPokemon = ({ input }) => {
  const [pokemonUrl, setPokemonUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${input}`
      );
      setPokemonUrl(data);
    } catch (error) {
      console.error(`Error occurred while fetching API`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(pokemonUrl);
  }, []);

  return (
    <div>
      <h1>Pokemon Result:{loading ? <Loading /> : console.log(pokemonUrl)}</h1>
    </div>
  );
};

export default SearchForPokemon;
