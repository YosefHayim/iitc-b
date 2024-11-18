import axios from "axios";
import { useState, useEffect } from "react";

const PokemonProfile = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async (pokemonUrl) => {
    const { data } = await axios.get(pokemonUrl);
    setPokemon(data);
  };

  useEffect(() => {
    fetchData(pokemonUrl);
  }, []);

  console.log(pokemon);

  return (
    pokemon && (
      <div>
        <div>
          <h1>Name: {pokemon.name}</h1>
          <h2>ID: {pokemon.id}</h2>
          <h2>Type: {pokemon.types[0].type.name}</h2>
          <div className="ImgContainer">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt="Pokemon Creature"
            />
            <h2>Abilities:</h2>
            <ul>
              {pokemon.abilities.map(({ ability }, index) => (
                <li key={index}>{ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default PokemonProfile;
