import { Category } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const imgStyle = "w-[6em] h-[6em] rounded-full";
const textStyle = "absolute text-white font-bold z-10 text-center";

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
    <div className="flex flex-row items-center justify-between p-[1em] flex-wrap gap-[1em]">
      {data?.map((category: Category) => (
        <Link to={`/recipe-page/${category.categoryName} `} key={category.id}>
          <div className="relative w-[6em] h-[6em]">
            <img
              src={category.img}
              alt={category.categoryName}
              className={imgStyle}
            />
            <div className="absolute inset-0 bg-black opacity-[0.5] rounded-full"></div>
            <h2
              className={`${textStyle} inset-0 flex items-center justify-center`}
            >
              {category.categoryName}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FoodCategory;
