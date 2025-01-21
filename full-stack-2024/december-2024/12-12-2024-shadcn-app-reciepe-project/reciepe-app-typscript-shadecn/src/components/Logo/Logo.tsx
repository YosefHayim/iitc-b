import logo from "../../../public/logo/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="text-center">
      <Link to="/recipe-page/dashboard">
        <button>
          <img src={logo} alt="logo" />
        </button>
      </Link>
    </div>
  );
};

export default Logo;
