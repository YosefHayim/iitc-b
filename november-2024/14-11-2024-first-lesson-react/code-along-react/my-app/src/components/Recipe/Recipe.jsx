import React from "react";
import "./Recipe.css";
import Ingr from "../Ingr/Ingr";
import Inst from "../Inst/Inst";

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
