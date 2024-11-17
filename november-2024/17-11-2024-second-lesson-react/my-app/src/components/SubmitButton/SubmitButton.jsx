import React, { useState } from "react";
import styles from "./SubmitButton.module.css";
import ThankYouPage from "../ThankYouPage/ThankYouPage";

const SubmitButton = () => {
  const [isThankYouPage, setIsThankYouPage] = useState(false);

  const handleClick = (e) => {
    if (e.target.closest("button")) {
      setIsThankYouPage(true);
    }
  };

  return (
    <div className={styles.SubmitContainer}>
      {isThankYouPage ? (
        <ThankYouPage />
      ) : (
        <button
          onClick={handleClick}
          type="submit"
          className={styles.SubmitButton}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default SubmitButton;
