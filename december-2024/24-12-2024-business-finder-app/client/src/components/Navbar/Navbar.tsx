import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
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
          <Button>Home</Button>
        </Link>
      </div>
      <div>
        <Link to="/about">
          <Button>About</Button>
        </Link>
      </div>
      <div>
        <Link to="/contact">
          <Button>Contact</Button>
        </Link>
      </div>
      <div>
        <Link to="/add-business">
          <Button>Add business</Button>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
      <div>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </div>
      <div>hey {username || "default name"}!</div>
      <div onClick={handleClick}>
        <Button>Log out</Button>
      </div>
    </div>
  );
};

export default Navbar;
