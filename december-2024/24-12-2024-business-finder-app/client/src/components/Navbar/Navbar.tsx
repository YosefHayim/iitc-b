import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

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
    <div className="flex flex-row items-center justify-around mb-[1em]">
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
      <div>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
      <div>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
      <div>
        <Link to="/add-business">
          <button>Add business</button>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      <div>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
      <div>hey {username || "default name"}!</div>
      <div onClick={handleClick}>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
