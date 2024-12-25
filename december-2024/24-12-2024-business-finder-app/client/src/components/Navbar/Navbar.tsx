import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import logo from "../../../public/images/logo.svg";
import { navbarStyle } from "@/utils/stylesWarehouse";

const Navbar = () => {
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.name);

  const handleClick = () => {
    Cookies.remove("cookie");
    console.log("cookie has been removed");
    localStorage.removeItem("persist:root");
    console.log("persist:root manually removed.");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="flex flex-row items-center justify-around w-full gap-[1em] absolute top-0 left-0 py-[1.5em] hover:bg-transBg">
      <div className="flex flex-row items-center justify-center">
        <Link to="/">
          <img src={logo} alt="" className="h-[2em]" />
          <h1>HireMe</h1>
        </Link>
      </div>
      <div className={`${navbarStyle}`}>
        <Link to="/">
          <button>Find a Job</button>
        </Link>
      </div>
      <div className={`${navbarStyle}`}>
        <Link to="/companies">
          <button>Companies</button>
        </Link>
      </div>
      <div className={`${navbarStyle}`}>
        <Link to="/how-it-works">
          <button>How its Works</button>
        </Link>
      </div>
      <div className={`${navbarStyle}`}>
        <Link to="/add-business">
          <button>Blog</button>
        </Link>
      </div>
      <div className={`${navbarStyle}`}>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>

      <div className="flex flex-row gap-[1em]">
        <div>
          <Link to="/login">
            <button className="text-white border border-white rounded-[100em] px-[0.5em] py-[0.2em] hover:text-white hover:bg-black hover:border-none">
              Sign In
            </button>
          </Link>
        </div>
        <div>
          <Link to="/register">
            <button className="border border-black rounded-[100em] px-[0.5em] py-[0.2em] bg-black text-white hover:text-white hover:bg-slate-700">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
