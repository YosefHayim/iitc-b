import { IoMdArrowRoundBack } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import placeholderImg from "../../../public/ginger-roasted-tomato.svg";
import profileImgPlaceholder from "../../../public/profile-image-placeholder.svg";
import { pageDefaultStyle } from "../Home/Home";
import { HiCheckBadge } from "react-icons/hi2";
import { BsDot } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import Ingredients from "./Ingredients/Ingredients";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";

const Recipe = () => {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState([]);

  const fetchRecipeById = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/recipes/?id=${id}`);

      if (res) {
        console.log(res.data[0]);
        setRecipeData(res.data[0]);
      }
    } catch (error) {
      console.error(
        `Error has been occurred durning fetching recipe by Id: `,
        error
      );
    }
  };

  const authorName = recipeData.authorName;
  const recipeName = recipeData.recipeName;

  useEffect(() => {
    fetchRecipeById();
  }, []);

  return (
    <div>
      {recipeData && (
        <div className={pageDefaultStyle}>
          <img
            src={recipeData.imagePath}
            alt=""
            className="absolute top-0 left-0 w-[100vw]"
          />
          <div className="absolute inset-0 bg-black opacity-50 h-[180px]"></div>
          <div className="flex flex-row items-center justify-between absolute top-0 left-0 w-full p-[1em]">
            <button>
              <IoMdArrowRoundBack style={{ color: "white" }} />
            </button>
            <h1 className="text-white">Recipe details</h1>
            <button>
              <BsThreeDots style={{ color: "white" }} />
            </button>
          </div>
          <UserCard authorName={authorName} recipeName={recipeName} />
          <Ingredients />
        </div>
      )}
    </div>
  );
};

export default Recipe;
