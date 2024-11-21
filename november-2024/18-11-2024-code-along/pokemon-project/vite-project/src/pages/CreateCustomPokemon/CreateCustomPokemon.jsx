import styles from "./CreateCustomPokemon.module.css";

const CreateCustomPokemon = () => {
  return (
    <div className={styles.CreateCustomPokemonContainer}>
      <h1>Add custom pokemon</h1>

      <form className={styles.CustomPokemonFormContainer}>
        <div className={styles.PokemonNameContainer}>
          <label htmlFor="name">Pokemon Name</label>
          <input type="text" id="name" placeholder="Pokemon name..." />
        </div>

        <div className={styles.ImgUrlContainer}>
          <label htmlFor="imageLink">Pokemon Image URL</label>
          <input
            type="text"
            id="imageLink"
            placeholder="Pokemon Image Url..."
          />
        </div>

        <div className={styles.typesContainer}>
          <label htmlFor="types">Pokemon Types</label>
          <input type="text" id="types" placeholder="Pokemon types..." />
        </div>

        <div className={styles.statsContainer}>
          <label htmlFor="stats">Pokemon Stats</label>
          <input type="text" id="stats" placeholder="Pokemon stats..." />
        </div>

        <div className={styles.expContainer}>
          <label htmlFor="exp">Pokemon Base Experience</label>
          <input type="text" id="exp" placeholder="Pokemon exp..." />
        </div>

        <div className={styles.heightNWeightContainer}>
          <label htmlFor="heightNWeight">Pokemon Weight & Height</label>
          <input type="text" id="height" placeholder="Pokemon height..." />
          <input type="text" id="weight" placeholder="Pokemon weight..." />
        </div>

        <div className={styles.creatorContainer}>
          <label htmlFor="creator">Created By</label>
          <input type="text" id="creator" placeholder="Josephs Sabagos..." />
        </div>
      </form>
    </div>
  );
};

export default CreateCustomPokemon;
