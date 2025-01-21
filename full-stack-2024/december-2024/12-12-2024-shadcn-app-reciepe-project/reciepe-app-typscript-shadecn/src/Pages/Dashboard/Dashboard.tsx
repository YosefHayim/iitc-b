import { pageDefaultStyle } from "../../Pages/Home/Home";
import FoodCategory from "./FoodCategory/FoodCategory";
import RecommendationForVegan from "./RecommendationForVegan/RecommendationForVegan";
import Commercial from "./Commercial/Commercial";
import OptionsComponent from "./OptionsComponent/OptionsComponent";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import Logo from "@/components/Logo/Logo";

const Dashboard = () => {
  return (
    <div className={`${pageDefaultStyle} text-[0.8em]`}>
      <Logo />
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
