import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-around mb-[1em]">
      <div>
        <Link to="/"><Button>Home</Button></Link>
      </div>
      <div>
        <Link to="/about"><Button>About</Button></Link>
      </div>
      <div>
        <Link to="/contact"><Button>Contact</Button></Link>
      </div>
      <div>
        <Link to="/add-business"><Button>Add business</Button></Link>
      </div>
      <div>
        <Link to="/login"><Button>Login</Button></Link>
      </div>
      <div>
        <Link to="/register"><Button>Register</Button></Link>
      </div>
    </div>
  );
};

export default Navbar;
