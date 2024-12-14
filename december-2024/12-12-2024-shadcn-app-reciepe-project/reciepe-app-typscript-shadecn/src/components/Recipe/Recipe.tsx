import { IoMdArrowRoundBack } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import placeholderImg from "../../../public/ginger-roasted-tomato.svg";
import profileImgPlaceholder from "../../../public/profile-image-placeholder.svg";
import { pageDefaultStyle } from "../Home/Home";
import { HiCheckBadge } from "react-icons/hi2";
import { BsDot } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import Ingredients from "../Ingredients/Ingredients";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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
          <div className="flex flex-row items-center justify-between p-[0.4em] rounded-[1em] shadow-profileUserShadow bg-white transform translate-y-[-15.5em] absolute left-[17px]">
            <div className="flex flex-col items-start justify-center">
              <h2 className="font-bold">{recipeData.recipeName}</h2>
              <div className="flex flex-row items-center gap-[0.2em]">
                <img
                  src={profileImgPlaceholder}
                  alt=""
                  className="rounded-[100em] w-[2em]"
                />
                <h2>{recipeData.authorName}</h2>
                <HiCheckBadge style={{ color: "#29b265", fontSize: "1.5em" }} />
                <BsDot style={{ color: "gray" }} />
                <FaStar style={{ color: "gold" }} />
                <p>4.9</p>
              </div>
            </div>
            <div className="ml-[3em]">
              <BsFillBookmarkHeartFill style={{ color: "gray" }} />
            </div>
          </div>
          <Ingredients />
        </div>
      )}
    </div>
  );
};

export default Recipe;
