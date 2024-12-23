import React from "react";
import { IoIosSearch } from "react-icons/io";

const Searchbar = ({ type, placeholderText }) => {
  return (
    <div className="relative w-full max-w-md">
      <input
        type={type}
        placeholder={placeholderText}
        className="w-full py-[0.5em] px-[1em] border rounded-[0.2em] bg-themeBg placeholder-gray-500 border-gray-300 focus:outline-none focus:placeholder-black "
      />
      <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default Searchbar;
