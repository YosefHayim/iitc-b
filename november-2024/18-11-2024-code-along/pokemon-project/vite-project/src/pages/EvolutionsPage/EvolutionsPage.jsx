import { useEffect } from "react";
import styles from "./EvolutionPage.module.css";
import axios from "axios";
import { useState } from "react";

const EvolutionsPage = () => {
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/evolution-chain/"
    );
    if (data.results) {
      await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonData = await axios.get(pokemon.url);
          console.log(pokemonData.data);
          return pokemonData;
        })
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.EvolutionsPage}>
      <h1 className={styles.PageTitle}>EvolutionsPage</h1>
    </div>
  );
};

export default EvolutionsPage;
