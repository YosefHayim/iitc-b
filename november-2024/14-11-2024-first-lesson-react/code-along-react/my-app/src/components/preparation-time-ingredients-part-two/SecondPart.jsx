import "./SecondPart.css";
import React from "react";

const SecondPart = () => {
  return (
    <div>
      <div className="part-one-second-container">
        <h2 className="preparation-time-title">Preparation time</h2>
        <ul>
          <li>
            <b>Total</b>: Approximately 10 <br />
            <span>minutes</span>
          </li>
          <li>
            <b>Preparation</b>: 5 minutes
          </li>
          <li>
            <b>Cooking</b>: 5 minutes
          </li>
        </ul>
      </div>

      <div className="part-two-second-container">
        <h2>Ingredients</h2>
        <ul>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SecondPart;
