import Searchbar from "@/components/Dashboard/Searchbar/Searchbar";
import { pageDefaultStyle } from "@/components/Home/Home";
import axios from "axios";
import { useEffect, useState } from "react";
import foodImagePlaceholder from "../../../public/image-placeholder.svg";
import SearchResults from "@/components/SearchResults/SearchResults";

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
          const filteredData = res.data.filter((recipeResult) =>
            recipeResult.recipeName
              ?.toLowerCase()
              .includes(input.toString().toLowerCase())
          );

          setData(filteredData.length > 0 ? filteredData : []);
        } else {
          setData([]);
        }
      }
    } catch (error) {
      console.error("Error occurred during search for the recipe: ", error);
      setData([]);
    }
  };

  useEffect(() => {
    searchRecipeData();
  }, [input]);

  console.log(data);

  return (
    <div className={`${pageDefaultStyle} text-[0.8em]`}>
      <Searchbar input={input} setInput={setInput} />
      <SearchResults data={data} />
    </div>
  );
};

export default Search;
