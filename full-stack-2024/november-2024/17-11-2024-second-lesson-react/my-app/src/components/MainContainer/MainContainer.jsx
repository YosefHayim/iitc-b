import React, { useState } from "react";
import Title from "../Title/Title";
import StarIcon from "../StarIcon/StarIcon";
import Paragraph from "../Paragraph/Paragraph";
import Buttons from "../Buttons/Buttons";
import SubmitButton from "../SubmitButton/SubmitButton";
import styles from "./MainContainer.module.css";
import ThankYouPage from "../ThankYouPage/ThankYouPage";

const FatherContainer = () => {
  const [isSubmit, setSubmitted] = useState(false);
  const [isValue, setValue] = useState(1);

  return (
    <div className={styles.FatherContainer}>
      {!isSubmit ? (
        <>
          <StarIcon />
          <Title />
          <Paragraph />
          <Buttons isValue={isValue} setValue={setValue} />
          <SubmitButton isSubmit={isSubmit} setSubmitted={setSubmitted} />
        </>
      ) : (
        <ThankYouPage isValue={isValue} />
      )}
    </div>
  );
};

export default FatherContainer;
