import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BackPageArrow from "../../BackPageArrow/BackPageArrow";

const styleIcon = {
  color: "white",
  borderRadius: "1em",
  width: "10vw",
  fontSize: "0.5em",
  height: "100%",
  padding: "0.4em",
  transform: "scaleX(-1)",
  "&:hover": {
    backgroundColor: "#050f20",
  },
};

const ProfileHeaderNavigation = () => {
  return (
    <div className="ProfileNavigation flex flex-row items-center justify-between p-[1em]">
      <Link to="/posts-feed">
        <button>
          <BackPageArrow />
        </button>
      </Link>
      <Link to="/account-options">
        <button>
          <MoreVertIcon sx={styleIcon} />
        </button>
      </Link>
    </div>
  );
};

export default ProfileHeaderNavigation;
