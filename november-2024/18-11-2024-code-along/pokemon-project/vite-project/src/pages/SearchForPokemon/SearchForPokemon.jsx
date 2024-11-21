import styles from "./SearchForPokemon.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";

const SearchForPokemon = ({ input }) => {
  const params = useParams();
  console.log(params);

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
      {loading && <Loading />}
      {pokemonUrl && (
        <>
          <h2>Meet {pokemonUrl.name}</h2>
          <img
            src={pokemonUrl.sprites.other.dream_world.front_default}
            alt={pokemonUrl.name}
          />
          <p>Weight: {pokemonUrl.weight}</p>
          <p>Height: {pokemonUrl.height}</p>
          <p>Base Experience: {pokemonUrl.base_experience}</p>
          <h3>Abilities:</h3>
          <div>
            {pokemonUrl.abilities.map((ability, index) => (
              <div key={index}>
                {ability.ability.name} {ability.is_hidden && "(Hidden Ability)"}
              </div>
            ))}
          </div>
          <h3>Sprites:</h3>
          <h3>Types:</h3>
          <ul>
            {pokemonUrl.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
          <h3>Voice:</h3>
          <audio controls>
            <source src={pokemonUrl.cries.latest} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
        </>
      )}
    </div>
  );
};

export default SearchForPokemon;
