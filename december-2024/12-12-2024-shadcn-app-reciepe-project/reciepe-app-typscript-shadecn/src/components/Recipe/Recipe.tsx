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

const Recipe = () => {
  return (
    <div className={pageDefaultStyle}>
      <img
        src={placeholderImg}
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
          <h2 className="font-bold">Ginger roasted tomato</h2>
          <div className="flex flex-row items-center gap-[0.2em]">
            <img
              src={profileImgPlaceholder}
              alt=""
              className="rounded-[100em] w-[2em]"
            />
            <h2>Mc Hustkler</h2>
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
  );
};

export default Recipe;
