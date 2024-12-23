import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import { navBarDesign } from "../../utils/designStyles";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-center my-[2em] gap-[1em]">
      <Link to="/">
        <div>
          <Logo />
        </div>
      </Link>
      <Link to="/" className={`${navBarDesign}`}>
        <div>Home</div>
      </Link>
      <Link to="/topics" className={`${navBarDesign}`}>
        <div>Topics</div>
      </Link>
      <Link to="/contact" className={`${navBarDesign}`}>
        <div>Contact</div>
      </Link>
      <Link to="/about" className={`${navBarDesign}`}>
        <div>About</div>
      </Link>
      <Searchbar type="text" placeholderText="Search..." />
      <Button text="Login" />
    </div>
  );
};

export default Navbar;
