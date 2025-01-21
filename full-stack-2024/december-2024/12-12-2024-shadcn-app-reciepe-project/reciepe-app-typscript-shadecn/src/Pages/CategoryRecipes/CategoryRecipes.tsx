import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchResults from "@/components/SearchResults/SearchResults";
import { pageDefaultStyle } from "../Home/Home";
import Logo from "@/components/Logo/Logo";
import GoBackArrow from "@/components/GoBackArrow/GoBackArrow";

const CategoryRecipes = () => {
  const { categoryName } = useParams();
  const [data, setData] = useState<string[]>([]);

  const fetchRecipesByCategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/recipes?categoryName=${categoryName}`
      );

      if (res.data) {
        setData(res.data);
      }
    } catch (error) {
      console.error(
        `Error occurred during fetching category of recipes: `,
        error
      );
    }
  };

  useEffect(() => {
    fetchRecipesByCategory();
  }, []);

  return (
    <div className={pageDefaultStyle}>
      <GoBackArrow />
      <Logo />
      <div>{data && <SearchResults data={data} />}</div>
    </div>
  );
};

export default CategoryRecipes;
