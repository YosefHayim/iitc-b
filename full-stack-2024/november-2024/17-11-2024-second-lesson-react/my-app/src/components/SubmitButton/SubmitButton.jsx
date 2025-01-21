import React from "react";
import styles from "./SubmitButton.module.css";

const SubmitButton = (props) => {
  const clickListener = (e) => {
    if (e.target.closest("button")) {
      props.setSubmitted(true);
    }
  };

  return (
    <div className={styles.SubmitContainer}>
      <button
        onClick={clickListener}
        type="submit"
        className={styles.SubmitButton}
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
