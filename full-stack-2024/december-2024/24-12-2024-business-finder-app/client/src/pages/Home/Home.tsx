import { Button } from "@/components/ui/button";
import styles from "./Home.module.css";
import { Input } from "@/components/ui/Input";
import { GoSearch } from "react-icons/go";
import StatisticsData from "./StatisticsData/StatisticsData";
import { btnStyle, pSize, titleSize } from "@/utils/stylesWarehouse";
import bgImg from "/images/background-home.svg";

const Home = () => {
  return (
    <div>
      <div className={styles}>
        <div className="flex flex-col items-center justify-center mb-[1em]">
          <h1 className={`${titleSize}`}>Modernizing the Job</h1>
          <h2 className={`${titleSize}`}>Search Experience</h2>
          <p className={`${pSize}`}>
            Search and find your dream job now easier than ever, you can
          </p>
          <p className={`${pSize}`}>
            simply browse and find a job if you need it
          </p>
        </div>
        <div className="flex flex-row w-full gap-[0.5em]">
          <div className="relative w-3/4">
            <Input
              className="w-full p-2 pl-4 pr-10 border border-white rounded-[100em] bg-white focus:border-transparent"
              placeholder="Search for a job..."
            />
            <GoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <Button
            className={`${btnStyle} w-1/4 p-2 rounded-[100em] bg-black text-white hover:bg-white hover:text-black`}
          >
            Search
          </Button>
        </div>
      </div>
      <StatisticsData />
    </div>
  );
};

export default Home;
