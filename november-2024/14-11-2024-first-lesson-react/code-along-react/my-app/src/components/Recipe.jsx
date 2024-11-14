import React from "react";
import "./styles/Recipe.css";
import Ingr from "./Ingr";
import Inst from "./Inst";

const Recipe = () => {
  return (
    <div className="recipe-container">
      Recipe container
      <Ingr />
      <Inst />
    </div>
  );
};

export default Recipe;
