import "./ThirdPart.css";
import React from "react";

const ThirdPart = () => {
  return (
    <div>
      <h2>Instructions</h2>
      <ol>
        <li>
          <b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of salt
          and pepper until they are well mixed. You can add a tablespoon of
          water or milk for a fluffier texture.
        </li>

        <li>
          <b>Heat the pan</b>: Place a non-stick frying pan over medium heat and
          add butter or oil.
        </li>
        <li>
          <b>Cook the omelette</b>: Once the butter is melted and bubbling, pour
          in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
        </li>
        <li>
          <b>Add fillings (optional)</b>: When the eggs begin to set at the
          edges but are still slightly runny in the middle, sprinkle your chosen
          fillings over one half of the omelette.
        </li>
        <li>
          <b>Fold and serve</b>: As the omelette continues to cook, carefully
          lift one edge and fold it over the fillings. Let it cook for another
          minute, then slide it onto a plate.
        </li>
        <li>
          <b>Enjoy</b>: Serve hot, with additional salt and pepper if needed.
        </li>
      </ol>
      <div>
        <h2>Nutrition</h2>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <div>
          <ul>
            <li>Calories 277kcal</li>
            <li>Carbs 0g</li>
            <li>Protein 20g</li>
            <li>Fat 22g</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThirdPart;
