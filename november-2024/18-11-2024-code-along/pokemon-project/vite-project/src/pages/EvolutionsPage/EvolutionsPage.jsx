import { useEffect, useState } from "react";
import styles from "./EvolutionPage.module.css";
import axios from "axios";

const EvolutionsPage = () => {
  const [arrayData, setArrayData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/evolution-chain/"
      );
      if (data.results) {
        const evolutions = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonEvo = await axios.get(pokemon.url);
            console.log(pokemonEvo.data);

            return pokemonEvo.data;
          })
        );
        setArrayData(evolutions);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.EvolutionsPage}>
      <h1 className={styles.PageTitle}>EvolutionsPage</h1>
      {arrayData ? (
        arrayData.map((pokemonEvo) => (
          <div
            key={pokemonEvo.chain.species.name}
            className={styles.pokemonEvoContainer}
          >
            <div>#{pokemonEvo.id}</div>
            <div>Name: {pokemonEvo.chain.species.name}</div>
            <div>
              Minimum level:
              {pokemonEvo.chain.evolves_to[0]?.evolution_details[0]?.min_level}
              <div>
                <div>
                  minimum happiness:
                  {pokemonEvo
                    ? pokemonEvo.chain.evolves_to[0].evolution_details[0]
                        .min_happiness
                    : `unknown`}
                </div>
                evolve to: {pokemonEvo.chain.evolves_to[0]?.species.name}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EvolutionsPage;
