import React from "react";
import Title from "../Title/Title";
import StarIcon from "../StarIcon/StarIcon";
import Paragraph from "../Paragraph/Paragraph";
import Buttons from "../Buttons/Buttons";
import SubmitButton from "../SubmitButton/SubmitButton";
import styles from "./MainContainer.module.css";

const FatherContainer = () => {
  return (
    <div className={styles.FatherContainer}>
      <StarIcon />
      <Title />
      <Paragraph />
      <Buttons />
      <SubmitButton />
    </div>
  );
};

export default FatherContainer;
