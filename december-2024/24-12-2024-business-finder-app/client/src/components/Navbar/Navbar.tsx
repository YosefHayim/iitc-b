import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { navbarStyle } from "@/utils/stylesWarehouse";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.name);
  const profilePic = useSelector((state) => state.user.profileImg);

  const handleClick = () => {
    Cookies.remove("cookie");
    console.log("cookie has been removed");
    localStorage.removeItem("persist:root");
    console.log("persist:root manually removed.");
    navigate("/login");
    window.location.reload();
  };

  useEffect(() => {
    if (Cookies.get("cookie")) {
      setIsLogged(true);
    }
  }, [username, profilePic]);

  return (
    <div className="flex flex-row items-center justify-around w-full gap-[1em] absolute top-0 left-0 py-[0.1em] bg-transBg transition ease-in duration-[5000ms]">
      <div className="flex flex-row items-center justify-center">
        <Logo />
      </div>
      <div className={`${navbarStyle}`}>
        <Link to="/business-feed">
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
        <Link to="/blog">
          <button>Blog</button>
        </Link>
      </div>
      <div className={`${navbarStyle}`}>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>

      <div className={isLogged ? "hidden" : "flex flex-row gap-[1em]"}>
        <div>
          <Link to="/login">
            <button className="text-white bg-black hover:bg-white rounded-[100em] px-[0.5em] py-[0.2em] hover:text-black hover:border-none transition ease-in duration-[5000ms]">
              Sign In
            </button>
          </Link>
        </div>
        <div>
          <Link to="/register">
            <button className="text-white bg-black hover:bg-white rounded-[100em] px-[0.5em] py-[0.2em] hover:text-black hover:border-none transition ease-in duration-[5000ms]">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <div
        className={isLogged ? "flex flex-row gap-[1em] items-center" : "hidden"}
      >
        <Link to="/edit-profile">
          <Avatar>
            <AvatarImage src={profilePic} />
            <AvatarFallback>
              {username.slice(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Link>
        <p>Hi {username}</p>
        <Button
          className="rounded-[100em] hover:bg-white hover:text-black"
          onClick={handleClick}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
