import {
  Home,
  Search,
  Bookmark,
  CogFour,
  ChatMessages,
} from "@mynaui/icons-react";
import { Link } from "react-router-dom";

const divStyle =
  "flex-col flex text-white hover:bg-white hover:text-black p-[0.8em] rounded-[0.5em]";

const NavigationMenu = () => {
  return (
    <div className="flex flex-wrap items-center w-full absolute bottom-0 left-0 justify-between bg-black p-[0.2em]">
      <Link to="">
        <div className={divStyle}>
          <Home />
        </div>
      </Link>
      <Link to="">
        <div className={divStyle}>
          <Search />
        </div>
      </Link>
      <Link to="">
        <div className={divStyle}>
          <ChatMessages />
        </div>
      </Link>
      <Link to="">
        <div className={divStyle}>
          <Bookmark />
        </div>
      </Link>
      <Link to="">
        <div className={divStyle}>
          <CogFour />
        </div>
      </Link>
    </div>
  );
};

export default NavigationMenu;
