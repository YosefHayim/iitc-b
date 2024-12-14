import Searchbar from "@/components/Dashboard/Searchbar/Searchbar";
import { pageDefaultStyle } from "@/components/Home/Home";
import axios from "axios";
import { useEffect, useState } from "react";

const Search = () => {
  const [input, setInput] = useState<string | number>(""); // User input
  const [data, setData] = useState<any[]>([]); // Default to an empty array

  const searchRecipeData = async () => {
    try {
      if (input.trim()) {
        const res = await axios.get(
          isNaN(Number(input)) ?
            `http://localhost:3000/recipes?title=${input}`
          : `http://localhost:3000/recipes/?id=${input}`
        );

        if (res.data && Array.isArray(res.data)) {
          // Filter recipes based on input
          const filteredData = res.data.filter((recipeResult) =>
            recipeResult.recipeName
              ?.toLowerCase()
              .includes(input.toString().toLowerCase())
          );

          // Update state with filtered data or empty array
          setData(filteredData.length > 0 ? filteredData : []);
        } else {
          setData([]); // No data received
        }
      }
    } catch (error) {
      console.error("Error occurred during search for the recipe: ", error);
      setData([]); // Handle errors with empty state
    }
  };

  useEffect(() => {
    searchRecipeData(); // Call search function whenever input changes
  }, [input]);

  console.log(data); // Debugging state

  return (
    <div className={`${pageDefaultStyle} text-[0.8em]`}>
      <Searchbar input={input} setInput={setInput} />
      <div className="flex flex-col items-start justify-start mt-[1em]">
        {data.length > 0 ?
          data.map((recipe) => (
            <div
              key={recipe.id}
              className="flex flex-col items-start justify-start mb-[1em] rounded-[1em]"
            >
              <p>Recipe name: {recipe.recipeName}</p>
              <p>User: {recipe.authorName}</p>
              <p>Category: {recipe.categoryName}</p>
              {recipe.imagePath && (
                <img
                  src={recipe.imagePath}
                  alt={recipe.recipeName}
                  className="rounded-[1em]"
                />
              )}
            </div>
          ))
        : ""}
      </div>
    </div>
  );
};

export default Search;
