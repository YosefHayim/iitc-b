import { pageDefaultStyle } from "@/Pages/Home/Home.js";
import Logo from "@/components/Logo/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UserNotification from "@/components/UserNotification/UserNotification";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import generateRandomId from "../../utils/randomId.js";

const AddRecipe = () => {
  const [postAdded, setPostAdded] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = generateRandomId();
    const formData = new FormData(e.target as HTMLFormElement);
    const recipeName = formData.get("recipeName") as string;
    const authorName = formData.get("authorName") as string;
    const categoryName = formData.get("categoryName") as string;
    const ingredients = formData.get("ingredients") as string;
    const instructions = formData.get("instructions") as string;
    const prepTime = formData.get("prepTime") as string;
    const cookTime = formData.get("cookTime") as string;
    const servings = Number(formData.get("servings"));
    const imagePath = formData.get("imagePath") as File;

    const urlFileConvert = URL.createObjectURL(imagePath);

    let imagePathToSave =
      urlFileConvert || "../../../public/image-placeholder.svg";

    const formObject = {
      id,
      recipeName,
      authorName,
      categoryName,
      ingredients,
      instructions,
      prepTime,
      cookTime,
      servings,
      imagePath: imagePathToSave,
    };
    addRecipeToDb(formObject);
  };

  const addRecipeToDb = async (formObject: {}) => {
    try {
      const res = await axios.post("http://localhost:3000/recipes", formObject);
      if (res) {
        setPostAdded(true);
        setTimeout(() => navigate("/recipe-page/dashboard"), 1000);
      }
    } catch (error) {
      console.error("Error adding recipe to db: ", error);
    }
  };

  return (
    <div className={`${pageDefaultStyle} text-[0.8em]`}>
      <Logo />
      <form
        className="flex flex-col items-center gap-[0.5em]"
        onSubmit={handleSubmit}
      >
        <Input placeholder="Recipe name" name="recipeName" required />
        <Input placeholder="Chef's name" name="authorName" required />
        <select
          name="categoryName"
          id="categoryName"
          required
          className="w-full h-10 rounded-md border border-gray-300 bg-white pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="" disabled selected>
            Select a category
          </option>
          <option value="Italian">Italian</option>
          <option value="Noodles">Noodles</option>
          <option value="Salad">Salad</option>
          <option value="Meat">Meat</option>
          <option value="Sushi">Sushi</option>
          <option value="Desserts">Desserts</option>
          <option value="Seafood">Seafood</option>
          <option value="Burgers">Burgers</option>
          <option value="Vegan">Vegan</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <label
          htmlFor="instructions"
          className="w-full font-bold text-[1.5em] text-center"
        >
          Instructions
        </label>
        <Input
          placeholder=""
          name="instructions"
          className="h-[200px]"
          required
        />
        <Input
          placeholder="Ingredients: Tomato, Cucumber..."
          name="ingredients"
          required
        />
        <Input
          placeholder="(Optional) Image path..."
          type="file"
          name="imagePath"
        />
        <Button type="submit">Add Recipe</Button>
      </form>
      {postAdded && <UserNotification text="Post added successfully!" />}
    </div>
  );
};

export default AddRecipe;
