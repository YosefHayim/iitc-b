import React from "react";
import styles from "./ThankYouPage.module.css";

const ThankYouPage = (props) => {
  return (
    <div className={styles.ThankYouPageContainer}>
      <div className={styles.ImgContainer}>
        <img
          src="/illustration-thank-you.svg"
          alt="Thank you"
          className={styles.ThankYouImg}
        />
      </div>
      <div className={styles.VoteResultContainer}>
        <p className={styles.VoteResult}>
          You selected {props.isValue} out of 5
        </p>
      </div>
      <h1 className={styles.Title}>Thank you!</h1>
      <p className={styles.ThanksParagraph}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYouPage;
