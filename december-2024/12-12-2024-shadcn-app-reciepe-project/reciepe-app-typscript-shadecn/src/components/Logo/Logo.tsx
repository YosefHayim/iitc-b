import logo from "../../../public/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <button>
          <img src={logo} alt="logo" />
        </button>
      </Link>
    </div>
  );
};

export default Logo;
