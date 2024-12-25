import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import logo from "../../../public/images/logo.svg";

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
    <div className="flex flex-row items-center justify-around w-full gap-[1em]">
      <div className="flex flex-row items-center justify-center">
        <img src={logo} alt="" className="h-[2em]" />
        <h1>HireMe</h1>
      </div>
      <div>
        <Link to="/">
          <button>Find a Job</button>
        </Link>
      </div>
      <div>
        <Link to="/about">
          <button>Companies</button>
        </Link>
      </div>
      <div>
        <Link to="/contact">
          <button>How it׳s Works</button>
        </Link>
      </div>
      <div>
        <Link to="/add-business">
          <button>Blog</button>
        </Link>
      </div>
      <div>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>

      <div className="flex flex-row gap-[1em]">
        <div>
          <Link to="/login">
            <button className="border border-black rounded-[100em] px-[0.5em] py-[0.2em] hover:text-white hover:bg-black">
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
