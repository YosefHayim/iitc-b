import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div>
      <h1>Contact the Pokémon Center</h1>
      <div className={styles.ContactUsContainer}>
        <form className={styles.ContactForm}>
          <label htmlFor="trainerName"></label>
          <input
            type="text"
            id="trainerName"
            name="trainerName"
            placeholder="Name"
            className={styles.BarInput}
          />
          <label htmlFor="trainerEmail"></label>
          <input
            type="email"
            id="trainerEmail"
            name="trainerEmail"
            placeholder="Email"
            className={styles.BarInput}
          />
          <label htmlFor="queryType">What can we help with?</label>
          <select id="queryType" name="queryType" className={styles.QueryType}>
            <option value="pokemonSearch">Help me find a Pokémon</option>
            <option value="battleTips">Battle Tips & Tricks</option>
            <option value="gymChallenge">Gym Challenge Assistance</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="trainerMessage">Your Message</label>
          <textarea
            className={styles.TextArea}
            id="trainerMessage"
            name="trainerMessage"
            placeholder="Tell us your adventure or problem! We'll help you become a Pokémon Master!"
          ></textarea>

          <button type="submit" className={styles.SubmitButton}>
            Send to Professor Oak!
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
