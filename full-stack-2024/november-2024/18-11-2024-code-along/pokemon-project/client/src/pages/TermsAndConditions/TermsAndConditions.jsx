import styles from "./TermsAndConditions.module.css";

const TermsAndConditions = () => {
  return (
    <div className={styles.TermsAndConditionsContainer}>
      <h1 className={styles.PageTitle}>Terms and Conditions</h1>
      <hr className={styles.HomeUnderLine} />
      <div className={styles.ResponsibilityContainer}>
        <h2>Trainer Responsibility Clause</h2>
        <p>
          You are the caretaker, cheerleader, and mentor of every Pokémon you
          catch. Keep them happy, well-trained, and avoid overindulgence in Rare
          Candies (moderation is key, even for a Dragonite!).
        </p>
      </div>
      <div className={styles.PokedexComplianceContainer}>
        <h2>Pokédex Compliance Policy</h2>
        <p>
          Respect each Pokémon you meet, from Caterpie to Kyogre. No squishing
          Wailords into Poké Balls too small—let’s keep things comfortable and
          compassionate.
        </p>
      </div>
      <div className={styles.GymEtiquetteContainer}>
        <h2>Gym Etiquette</h2>
        <p>
          Challenging a Gym Leader is serious business—but remember, Pokémon
          battles are a game of strategy, not shouting matches. No yelling
          "Hydro Pump everything!" unless absolutely necessary.
        </p>
      </div>
      <div className={styles.TeamRocketContainer}>
        <h2>No Team Rocket Shenanigans</h2>
        <p>
          This project does not condone stealing Pokémon, world domination, or
          melodramatic exits involving the phrase “We’re blasting off again!”
        </p>
      </div>
      <div className={styles.BerriesContainer}>
        <h2>Creative Use of Berries</h2>
        <p>
          Berries are for helping your Pokémon, not for bribing them to join
          your TikTok channel or distracting wild ones in questionable ways.
          Snorlax’s nap schedule is sacred.
        </p>
      </div>
      <div className={styles.LegendaryConductContainer}>
        <h2>Legendary Conduct</h2>
        <p>
          Capturing or working with Legendary Pokémon comes with responsibility.
          Respect their epicness—Zapdos isn’t your portable lightning generator,
          and Lugia isn’t your swimming instructor.
        </p>
      </div>
      <div className={styles.PokemonPrivacyContainer}>
        <h2>Pokémon Privacy Act</h2>
        <p>
          Pokémon have rights too! Avoid peeking at Pikachu’s diary or
          publishing Psyduck’s therapy notes without consent. They trust
          you—don’t let them down.
        </p>
      </div>
      <div className={styles.FinalBattleContainer}>
        <h2>Final Battle Disclaimer</h2>
        <p>
          Disputes are best resolved in Pokémon battles (or rock-paper-scissors
          for the less intense moments). Remember to play fair, and snacks for
          all participants are mandatory.
        </p>
      </div>
      <div className={styles.SupportContainer}>
        <h2>Help and Support</h2>
        <p>
          Stuck in the tall grass? Encountering unexpected bugs (not Bug-types)?
          Don’t hesitate to contact us at
          <a href="mailto:support@pokemon.com" className={styles.TagLink}>
            support@pokemon.com
          </a>
          . We’re here to make your journey smooth and your Pokédex full.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
