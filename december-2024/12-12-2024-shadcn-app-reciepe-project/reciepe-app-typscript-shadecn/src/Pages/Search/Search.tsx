import Searchbar from "@/components/Dashboard/Searchbar/Searchbar";
import { pageDefaultStyle } from "@/Pages/Home/Home";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchResults from "@/components/SearchResults/SearchResults";
import GoBackArrow from "@/components/GoBackArrow/GoBackArrow";

const Search = () => {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // Function to fetch recipe data
  const searchRecipeData = async (query: string) => {
    try {
      if (query.trim()) {
        const res = await axios.get(
          isNaN(Number(query)) ?
            `http://localhost:3000/recipes?title=${query}`
          : `http://localhost:3000/recipes/?id=${query}`
        );

        if (res.data && Array.isArray(res.data)) {
          const filteredData = res.data.filter((recipeResult) =>
            recipeResult.recipeName?.toLowerCase().includes(query.toLowerCase())
          );
          setData(filteredData.length > 0 ? filteredData : []);
        }
      }
    } catch (error) {
      console.error("Error occurred during search for the recipe: ", error);
    }
  };

  useEffect(() => {
    const query = searchParams.get("query") || "";
    setInput(query);
    searchRecipeData(query);
  }, [searchParams]);

  // Update searchParams when input changes
  useEffect(() => {
    const handler = setTimeout(() => {
      if (input.trim() !== searchParams.get("query")) {
        setSearchParams({ query: input });
      }
    }, 300); // Debounce input changes by 300ms

    return () => clearTimeout(handler);
  }, [input, setSearchParams, searchParams]);

  return (
    <div className={`${pageDefaultStyle} text-[0.8em]`}>
      <GoBackArrow />
      <div>
        <Searchbar input={input} setInput={setInput} />
        <SearchResults data={data} />
      </div>
    </div>
  );
};

export default Search;
