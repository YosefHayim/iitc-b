import { pageDefaultStyle } from "@/components/Home/Home";
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = generateRandomId;
    const formData = new FormData(e.target as HTMLFormElement);
    const recipeName = formData.get("recipeName") as string;
    const authorName = formData.get("authorName") as string;
    const categoryName = formData.get("categoryName") as string;
    const description = formData.get("description") as string;
    let imagePath = formData.get("imagePath") as string;

    if (!imagePath) {
      imagePath = "../../../public/placeholder-food-image.svg";
    }

    const formObject = {
      id,
      recipeName,
      authorName,
      categoryName,
      description,
      imagePath,
    };

    try {
      const res = await axios.post("http://localhost:3000/recipes", formObject);

      if (res) {
        console.log(res);
        setPostAdded(true);

        setTimeout(() => {
          navigate("/recipe-page/dashboard");
        }, 1000);
      }
    } catch (error) {
      console.error("Error has occurred during adding recipe to db: ", error);
    }
  };

  return (
    <div className={`${pageDefaultStyle} text-[0.8em]`}>
      <Logo />
      <form
        className="flex flex-col items-center gap-[0.5em]"
        onSubmit={handleSubmit}
      >
        <Input placeholder="Recipe name" name="recipeName" />
        <Input placeholder="Author name" name="authorName" />
        <Input placeholder="Category name" name="categoryName" />
        <Input placeholder="Description" name="description" />
        <Input placeholder="Image path" name="imagePath" />
        <Button type="submit">Add Recipe</Button>
      </form>
      {postAdded && <UserNotification text="Post added successfully!" />}
    </div>
  );
};

export default AddRecipe;
