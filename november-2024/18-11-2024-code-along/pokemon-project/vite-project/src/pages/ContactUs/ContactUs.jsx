import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.ContactUsContainer}>
      <h1>Contact the Pokémon Center</h1>
      <section>
        <form className={styles.ContactForm}>
          <label htmlFor="trainerName">Trainer Name</label>
          <input
            type="text"
            id="trainerName"
            name="trainerName"
            placeholder="e.g., Ash Ketchum"
          />

          <label htmlFor="trainerEmail">Trainer Email</label>
          <input
            type="email"
            id="trainerEmail"
            name="trainerEmail"
            placeholder="e.g., ash@pallet.com"
          />

          <label htmlFor="queryType">What can we help with?</label>
          <select id="queryType" name="queryType">
            <option value="pokemonSearch">Help me find a Pokémon</option>
            <option value="battleTips">Battle Tips & Tricks</option>
            <option value="gymChallenge">Gym Challenge Assistance</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="trainerMessage">Your Message</label>
          <textarea
            id="trainerMessage"
            name="trainerMessage"
            placeholder="Tell us your adventure or problem! We'll help you become a Pokémon Master!"
          ></textarea>

          <button type="submit">Send to Professor Oak!</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
