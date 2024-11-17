import React, { useState } from "react";
import styles from "./Buttons.module.css";

const Buttons = (props) => {
  const [currentButton, setCurrentButton] = useState(null);

  const buttonsListener = (e) => {
    const button = e.target.closest("button");

    if (button) {
      if (currentButton) {
        currentButton.style.background = "var(--neutral-very-dark-blue)";
        currentButton.style.color = "var(--neutral-light-grey)";
      }
      button.style.background = "var(--primary-orange)";
      button.style.color = "var(--neutral-very-dark-blue)";

      setCurrentButton(button);
      props.setValue(button.textContent);
    }
  };

  return (
    <div onClick={buttonsListener} className={styles.ButtonsContainer}>
      <button className={styles.ratingNumber}>1</button>
      <button className={styles.ratingNumber}>2</button>
      <button className={styles.ratingNumber}>3</button>
      <button className={styles.ratingNumber}>4</button>
      <button className={styles.ratingNumber}>5</button>
    </div>
  );
};

export default Buttons;
