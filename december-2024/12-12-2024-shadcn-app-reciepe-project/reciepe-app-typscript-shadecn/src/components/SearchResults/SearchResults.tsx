import { DataRecipes } from "@/types/types";
import foodImagePlaceholder from "../../../public/image-placeholder.svg";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const SearchResults: React.FC<{ data: DataRecipes[] }> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const btn = target.closest("button");

    if (btn) {
      const recipeId = btn.getAttribute("id");
      if (recipeId) {
        console.log(recipeId);
        navigate(`/recipe-page/recipe/${recipeId}`);
      }
    }
  };

  return (
    <div
      className="flex flex-col items-start justify-start mt-[1em] mb-[5em]"
      onClick={handleClick}
    >
      {data.length > 0 ?
        data.map((recipe) => (
          <div
            key={recipe.id}
            className={`flex flex-col items-start justify-start mb-[1em] gap-[0.5em] rounded-[1em]`}
          >
            <p>Recipe name: {recipe.recipeName}</p>
            <p>User: {recipe.authorName}</p>
            <p>Category: {recipe.categoryName}</p>
            <img
              src={recipe.imagePath || foodImagePlaceholder}
              alt={recipe.recipeName}
              className="rounded-[1em]"
            />
            <Button
              className={`bg-btnColor text-black hover:text-white`}
              id={recipe.id}
            >
              View Ingredients
            </Button>
          </div>
        ))
      : ""}
    </div>
  );
};

export default SearchResults;
