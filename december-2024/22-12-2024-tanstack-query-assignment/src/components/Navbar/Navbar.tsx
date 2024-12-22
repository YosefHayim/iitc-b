import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-center my-[2em] gap-[1em] text-[0.7em]">
      <Link to="/">
        <div className="bg-gray-500 hover:text-white p-[1em] rounded-[0.5em]">
          Home
        </div>
      </Link>
      <Link to="add-post">
        <div className="bg-gray-500 hover:text-white p-[1em] rounded-[0.5em]">
          Add posts
        </div>
      </Link>
      <Link to="/register">
        <div className="bg-gray-500 hover:text-white p-[1em] rounded-[0.5em]">
          Register
        </div>
      </Link>
      <Link to="/login">
        <div className="bg-gray-500 hover:text-white p-[1em] rounded-[0.5em]">
          Login
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
