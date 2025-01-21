import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const OptionTab = ({ icon, title, navigateRoute }) => {
  if (navigateRoute === "/login") {
    Cookies.remove("jwt");
  }

  return (
    <div className="AccountCenterContainer mt-[0.5em] flex-col items-start justify-start gap-[0.5em] rounded-[0.2em] p-[0.5em] hover:bg-profileSectionTheme">
      <Link to={navigateRoute}>
        <div className="flex w-full flex-row items-center gap-[0.5em]">
          <div className="flex flex-row items-center gap-[0.5em]">
            <div>{icon || ""}</div>
            <h3 className={title === "Log out" ? "text-red-600" : "text-white"}>
              {title}
            </h3>
          </div>
          <div className="ml-auto">
            <button>
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OptionTab;
