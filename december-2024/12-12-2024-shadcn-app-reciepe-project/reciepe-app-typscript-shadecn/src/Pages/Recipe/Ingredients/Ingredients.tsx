import React, { useState } from "react";
import { TbSalad } from "react-icons/tb";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Ingredients: React.FC<{
  ingredients: { name: string; amount: string }[];
  instructions: string[];
  prepTime: string;
  servings: number;
}> = ({ ingredients, instructions, prepTime, servings }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="border rounded-[1em] p-[0.5em] mt-[4.5em] w-[280px] mb-[1em]">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-[0.5em] pb-[0.5em]">
            <TbSalad />
            <h2>Instructions & Ingredients</h2>
          </div>
          <div>
            <button onClick={toggleOpen}>
              {isOpen ?
                <FaAngleUp style={{ color: "black" }} />
              : <FaAngleDown style={{ color: "black" }} />}
            </button>
          </div>
        </div>
        <hr />
        <div
          className={`transition-all duration-500 ${
            isOpen ? "max-h-[100%] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <ul className="list-disc pl-6 text-[0.75em] mb-[1em] flex flex-col gap-[0.5em]">
            {ingredients.map((ingredient) => (
              <li key={ingredient.name}>
                {ingredient.name} - {ingredient.amount}
              </li>
            ))}
          </ul>
          <ol className="list-decimal pl-6 text-[0.75em] flex flex-col gap-[0.5em]">
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          <hr />
          <div className="w-full text-start text-[0.75em]">
            <p>Preparation time: {prepTime}</p>
            <p>Servings for: {servings}</p>
          </div>
        </div>
      </div>
      <div className="relative bg-black px-4 py-2 text-sm font-medium rounded-[100em] shadow-profileUserShadow flex flex-row items-center justify-center">
        <button className="bg-textGradient bg-clip-text text-transparent">
          Start 7-day FREE Trial
        </button>
      </div>
    </div>
  );
};

export default Ingredients;
