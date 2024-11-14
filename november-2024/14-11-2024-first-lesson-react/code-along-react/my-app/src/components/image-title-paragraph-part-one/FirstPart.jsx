import "./FirstPart.css";
import img from "../../image-omelette.jpeg";
import React from "react";

const FirstPart = () => {
  return (
    <div className="first-part-container">
      <img src={img} alt="simple-omelette-recipe" className="omelette-img" />
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </div>
  );
};

export default FirstPart;
