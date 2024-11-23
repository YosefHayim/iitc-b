import styles from "./CreateCustomPokemon.module.css";

const CreateCustomPokemon = () => {
  return (
    <div>
      <h1 className={styles.PageTitle}>Add your own custom pokemon</h1>
      <div className={styles.CreateCustomPokemonContainer}>
        <form className={styles.CustomPokemonFormContainer}>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            placeholder="Pokemon name"
            className={styles.DataInput}
          />
          <label htmlFor="imageLink"></label>
          <input
            type="text"
            id="imageLink"
            placeholder="Pokemon Image Url"
            className={styles.DataInput}
          />

          <label htmlFor="types"></label>
          <input
            type="text"
            id="types"
            placeholder="Pokemon types"
            className={styles.DataInput}
          />

          <label htmlFor="stats"></label>
          <input
            type="text"
            id="stats"
            placeholder="Pokemon stats"
            className={styles.DataInput}
          />

          <label htmlFor="exp"></label>
          <input
            type="text"
            id="exp"
            placeholder="Pokemon exp"
            className={styles.DataInput}
          />

          <label htmlFor="heightNWeight"></label>
          <input
            type="text"
            id="height"
            placeholder="Pokemon height"
            className={styles.DataInput}
          />

          <label htmlFor="heightNWeight"></label>
          <input
            type="text"
            id="weight"
            placeholder="Pokemon weight"
            className={styles.DataInput}
          />

          <label htmlFor="creator"></label>
          <input
            type="text"
            id="creator"
            placeholder="Creator name"
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
