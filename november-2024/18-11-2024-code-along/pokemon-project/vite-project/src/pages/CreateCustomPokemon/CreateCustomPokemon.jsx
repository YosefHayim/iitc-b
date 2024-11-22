import styles from "./CreateCustomPokemon.module.css";

const CreateCustomPokemon = () => {
  return (
    <div>
      <h1 className={styles.PageTitle}>Add custom pokemon</h1>
      <div className={styles.CreateCustomPokemonContainer}>
        <form className={styles.CustomPokemonFormContainer}>
          <label htmlFor="name">Pokemon Name</label>
          <input
            type="text"
            id="name"
            placeholder="Pokemon name..."
            className={styles.DataInput}
          />
          <label htmlFor="imageLink">Pokemon Image URL</label>
          <input
            type="text"
            id="imageLink"
            placeholder="Pokemon Image Url..."
            className={styles.DataInput}
          />

          <label htmlFor="types">Pokemon Types</label>
          <input
            type="text"
            id="types"
            placeholder="Pokemon types..."
            className={styles.DataInput}
          />

          <label htmlFor="stats">Pokemon Stats</label>
          <input
            type="text"
            id="stats"
            placeholder="Pokemon stats..."
            className={styles.DataInput}
          />

          <label htmlFor="exp">Pokemon Base Experience</label>
          <input
            type="text"
            id="exp"
            placeholder="Pokemon exp..."
            className={styles.DataInput}
          />

          <label htmlFor="heightNWeight">Pokemon Height</label>
          <input
            type="text"
            id="height"
            placeholder="Pokemon height..."
            className={styles.DataInput}
          />

          <label htmlFor="heightNWeight">Pokemon Weight</label>
          <input
            type="text"
            id="weight"
            placeholder="Pokemon weight..."
            className={styles.DataInput}
          />

          <label htmlFor="creator">Creator name</label>
          <input
            type="text"
            id="creator"
            placeholder="Josephs Sabagos..."
            className={styles.DataInput}
          />
          <button className={styles.CreateCustomPokemon}>
            Create Custom Pokemon
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCustomPokemon;
