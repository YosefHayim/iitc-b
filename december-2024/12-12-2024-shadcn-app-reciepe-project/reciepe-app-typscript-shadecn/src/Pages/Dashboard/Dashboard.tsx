import { pageDefaultStyle } from "../../Pages/Home/Home";
import FoodCategory from "./FoodCategory/FoodCategory";
import RecommendationForVegan from "./RecommendationForVegan/RecommendationForVegan";
import Searchbar from "./Searchbar/Searchbar";
import Commercial from "./Commercial/Commercial";
import OptionsComponent from "./OptionsComponent/OptionsComponent";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

const Dashboard = () => {
  return (
    <div className={`${pageDefaultStyle} text-[0.8em]`}>
      <Searchbar />
      <Commercial />
      <OptionsComponent name="Categories" />
      <FoodCategory />
      <OptionsComponent name="Recommendation for vegans" />
      <RecommendationForVegan />
      <NavigationMenu />
    </div>
  );
};

export default Dashboard;
