import styles from "./SearchForPokemon.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";

const SearchForPokemon = () => {
  const { input } = useParams();

  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${input}`
      );
      setPokemonData(data);
    } catch (error) {
      console.error(`Error occurred while fetching API`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [input]);

  return (
    <div>
      {loading && <Loading />}
      {pokemonData && (
        <>
          <h2>Meet {pokemonData.name}</h2>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
          />
          <p>Weight: {pokemonData.weight}</p>
          <p>Height: {pokemonData.height}</p>
          <p>Base Experience: {pokemonData.base_experience}</p>
          <h3>Abilities:</h3>
          <div>
            {pokemonData.abilities.map((ability, index) => (
              <div key={index}>
                {ability.ability.name} {ability.is_hidden && "(Hidden Ability)"}
              </div>
            ))}
          </div>
          <h3>Types:</h3>
          <ul>
            {pokemonData.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SearchForPokemon;
