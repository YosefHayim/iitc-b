import { pageDefaultStyle } from "../Home/Home";
import { MdKeyboardArrowRight } from "react-icons/md";
import FoodCategory from "../FoodCategory/FoodCategory";
import RecommendationForVegan from "../RecommendationForVegan/RecommendationForVegan";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Searchbar from "./Searchbar/Searchbar";
import Commercial from "./Commercial/Commercial";
import OptionsComponent from "./OptionsComponent/OptionsComponent";

const boldText = "font-bold";

const Dashboard = () => {
  return (
    <div className={`${pageDefaultStyle} text-[0.8em]`}>
      <Searchbar />
      <Commercial />
      <OptionsComponent name="Category" />
      <FoodCategory />
      <OptionsComponent name="Recommendation for vegans" />
      <RecommendationForVegan />
      <NavigationMenu />
    </div>
  );
};

export default Dashboard;
