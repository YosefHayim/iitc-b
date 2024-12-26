import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { btnStyle, titleSize } from "@/utils/stylesWarehouse";
import { GoSearch } from "react-icons/go";
import { FaLaptopCode, FaChartBar, FaUsers, FaCog } from "react-icons/fa";

import BusinessPost from "../BusinessPost/BusinessPost";

const SearchPage = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <div className="text-center mt-[3em] text-white">
        <p>Realize your Career Dreams</p>
        <h1 className={`${titleSize}`}>Search and Discover</h1>
        <h2 className={`${titleSize}`}>your Jobs Here</h2>
      </div>
      <div className="flex items-center border border-gray-300 rounded-[100em] bg-white p-[0.5em] mb-[1em]">
        <GoSearch className="text-gray-500 text-lg mr-4" />
        <Input
          className="flex-1 bg-transparent focus:outline-none placeholder-gray-500 border-none rounded-[100em]"
          placeholder="Search for a job..."
        />
        <hr className="h-6 border-l border-gray-300 mx-4 rotate-180" />
        <Input
          className="flex-1 bg-transparent focus:outline-none placeholder-gray-500 border-none rounded-[100em]"
          placeholder="City, state, zip or remote"
        />
        <Button className={`${btnStyle}`}>Search</Button>
      </div>
      <div className="grid grid-cols-3 gap-[0.5em] justify-center items-center">
        <Button
          onClick={() => handleButtonClick("uiux")}
          className={`${btnStyle} ${
            activeButton === "uiux" ? "bg-white text-black" : ""
          }`}
        >
          <FaLaptopCode className="inline mr-2" />
          UI/UX Design
        </Button>
        <Button
          onClick={() => handleButtonClick("sales")}
          className={`${btnStyle} ${
            activeButton === "sales" ? "bg-white text-black" : ""
          }`}
        >
          <FaChartBar className="inline mr-2" />
          Sales
        </Button>
        <Button
          onClick={() => handleButtonClick("dev")}
          className={`${btnStyle} ${
            activeButton === "dev" ? "bg-white text-black" : ""
          }`}
        >
          <FaLaptopCode className="inline mr-2" />
          Development
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-[0.5em] justify-center items-center mt-[0.5em]">
        <Button
          onClick={() => handleButtonClick("analytics")}
          className={`${btnStyle} ${
            activeButton === "analytics" ? "bg-white text-black" : ""
          }`}
        >
          <FaChartBar className="inline mr-2" />
          Analytics
        </Button>
        <Button
          onClick={() => handleButtonClick("media")}
          className={`${btnStyle} ${
            activeButton === "media" ? "bg-white text-black" : ""
          }`}
        >
          <FaUsers className="inline mr-2" />
          Digital Media Specialist
        </Button>
        <Button
          onClick={() => handleButtonClick("data")}
          className={`${btnStyle} ${
            activeButton === "data" ? "bg-white text-black" : ""
          }`}
        >
          <FaCog className="inline mr-2" />
          Data Operator
        </Button>
        <Button
          onClick={() => handleButtonClick("project")}
          className={`${btnStyle} ${
            activeButton === "project" ? "bg-white text-black" : ""
          }`}
        >
          <FaCog className="inline mr-2" />
          Project Management
        </Button>
      </div>
      <BusinessPost />
    </div>
  );
};

export default SearchPage;
