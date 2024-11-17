import React from "react";
import styles from "./ThankYouPage.module.css";

const ThankYouPage = () => {
  return (
    <div className={styles.ThankYouPageContainer}>
      <img src="/illustration-thank-you.svg" alt="Thank you image" />
      <p>You selected 1 out of 5</p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYouPage;
