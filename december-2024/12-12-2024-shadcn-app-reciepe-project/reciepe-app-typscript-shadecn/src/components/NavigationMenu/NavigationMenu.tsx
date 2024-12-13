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
      <div className={divStyle}>
        <Link to="">
          <Home />
        </Link>
      </div>
      <div className={divStyle}>
        <Link to="">
          <Search />
        </Link>
      </div>
      <div className={divStyle}>
        <Link to="">
          <ChatMessages />
        </Link>
      </div>
      <div className={divStyle}>
        <Link to="">
          <Bookmark />
        </Link>
      </div>
      <div className={divStyle}>
        <Link to="">
          <CogFour />
        </Link>
      </div>
    </div>
  );
};

export default NavigationMenu;
