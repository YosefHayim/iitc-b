import { BsThreeDots } from "react-icons/bs";
import { pageDefaultStyle } from "../Home/Home";
import Ingredients from "./Ingredients/Ingredients";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";
import { DataRecipes } from "@/types/types";
import Loader from "@/components/Loader/Loader";
import GoBackArrow from "@/components/GoBackArrow/GoBackArrow";
import NavigationMenu from "@/components/NavigationMenu/NavigationMenu";

const Recipe = () => {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState<DataRecipes | null>(null);

  const fetchRecipeById = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/recipes/?id=${id}`);

      if (res) {
        setRecipeData(res.data[0]);
      }
    } catch (error) {
      console.error(
        `Error has been occurred durning fetching recipe by Id: `,
        error
      );
    }
  };

  useEffect(() => {
    fetchRecipeById();
  }, []);

  return (
    <div>
      {recipeData ?
        <div className={`${pageDefaultStyle}`}>
          <img
            src={recipeData.imagePath}
            alt=""
            className="absolute top-0 left-0 w-[100vw]"
          />
          <div className="absolute inset-0 bg-black opacity-50 h-[180px]"></div>
          <div className="flex flex-row items-center justify-between absolute top-0 left-0 w-full p-[1em]">
            <button>
              <GoBackArrow />
            </button>
            <h1 className="text-white">Recipe details</h1>
            <button>
              <BsThreeDots style={{ color: "white" }} />
            </button>
          </div>
          <UserCard
            authorName={recipeData.authorName}
            recipeName={recipeData.recipeName}
          />
          <Ingredients
            ingredients={recipeData.ingredients}
            instructions={recipeData.instructions}
            prepTime={recipeData.prepTime}
            servings={recipeData.servings}
          />
        </div>
      : <Loader />}
      <NavigationMenu />
    </div>
  );
};

export default Recipe;
