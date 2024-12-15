import Categories from "@/components/Categories/Categories";
import { Category } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";

const FoodCategory = () => {
  const [data, setData] = useState<Category[] | []>([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/categories");

      if (res) {
        setData(res.data);
      }
    } catch (error) {
      console.error("Error occurred durning fetching categories data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto w-[290px] p-[1em] scrollbar-thin scrollbar-thumb-btnColor scrollbar-track-gray-200 scrollbar-rounded mb-[1em]">
      <Categories data={data} />
    </div>
  );
};

export default FoodCategory;
