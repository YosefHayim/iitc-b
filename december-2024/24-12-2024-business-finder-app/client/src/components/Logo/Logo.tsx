import React from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.svg";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="" className="h-[2em]" />
        <h1>HireMe</h1>
      </Link>
    </div>
  );
};

export default Logo;
