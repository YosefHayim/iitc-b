import {
  Home,
  Search,
  Bookmark,
  CogFour,
  ChatMessages,
} from "@mynaui/icons-react";
import { IoAddCircleOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const divStyle =
  "flex-col flex text-white hover:bg-white hover:text-black p-[0.8em] rounded-[0.5em]";

const NavigationMenu = () => {
  return (
    <div className="flex flex-wrap items-center w-full fixed bottom-0 left-0 justify-between bg-black p-[0.2em] z-10">
      <Link to="/recipe-page/dashboard">
        <div className={divStyle}>
          <Home />
        </div>
      </Link>
      <Link to="/recipe-page/search">
        <div className={divStyle}>
          <Search />
        </div>
      </Link>
      <Link to="/recipe-page/news">
        <div className={divStyle}>
          <ChatMessages />
        </div>
      </Link>
      <Link to="/recipe-page/add/recipe">
        <div className={divStyle}>
          <IoAddCircleOutline style={{ fontSize: "2em" }} />
        </div>
      </Link>
      <Link to="/recipe-page/saved">
        <div className={divStyle}>
          <Bookmark />
        </div>
      </Link>
      <Link to="/recipe-page/settings">
        <div className={divStyle}>
          <CogFour />
        </div>
      </Link>
    </div>
  );
};

export default NavigationMenu;
