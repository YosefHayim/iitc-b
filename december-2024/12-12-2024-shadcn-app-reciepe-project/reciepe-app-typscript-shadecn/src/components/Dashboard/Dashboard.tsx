import { pageDefaultStyle } from "../Home/Home";
import { Input } from "../ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import dashboardImg from "../../../public/tacos-hand-image.svg";
import { Button } from "../ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";

import FoodCategory from "../FoodCategory/FoodCategory";
import RecommendationForVegan from "../RecommendationForVegan/RecommendationForVegan";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

const boldText = "font-bold";

const Dashboard = () => {
  return (
    <div className={`${pageDefaultStyle} text-[0.8em]`}>
      <div className="relative w-full flex flex-row items-center justify-between gap-[1em]">
        <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input className="pl-10" placeholder="Search your recipes" />
        <div>
          <FaUserCircle className="text-4xl" />
        </div>
      </div>
      <div className="w-full rounded-[1em] flex-row flex bg-black text-white items-center justify-start px-[1em] p-[1em] mt-[1em] gap-[0.5em] shadow-customShadow mb-[1em]">
        <div className="flex flex-col items-start justify-start">
          <h2
            className={`${boldText} bg-textGradient bg-clip-text text-transparent`}
          >
            Go to premium now!
          </h2>
          <p className="text-[0.9em]">
            Get access all the amazing recipes from the world
          </p>
          <Button variant="white" className="text-[0.9em] mt-[1em]">
            Start 7-day free trail
          </Button>
        </div>
        <img
          src={dashboardImg}
          alt=""
          className="overflow-auto transform translate-y-[1em]"
        />
      </div>
      <div className="mb-[2.5em] flex flex-row justify-between">
        <h2 className={boldText}>Category</h2>
        <div className="flex flex-row items-center justify-center">
          <button className="text-gray-500">Sell all</button>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <FoodCategory />
      <div className="mt-[2.5em]  flex flex-row justify-between">
        <h2 className={boldText}>Recommendation for vegan</h2>
        <div className="flex flex-row items-center justify-center">
          <button className="text-gray-500">Sell all</button>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <RecommendationForVegan />
      <NavigationMenu />
    </div>
  );
};

export default Dashboard;

{
  /* <h2 className={boldText}>Category</h2>
<div className="flex flex-row items-center w-full justify-between">
  <div className="mb-[3em] flex flex-row items-center justify-center">
    <button className="text-gray-500">Sell all</button>
    <MdKeyboardArrowRight />
  </div>
</div> */
}
