import { statsStyle } from "@/utils/stylesWarehouse";
import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";

const TopJobCategories = () => {
  return (
    <div className={`${statsStyle} flex-col`}>
      <p>Top Job Categories</p>
      <BsGraphUpArrow style={{ fontSize: "3em" }} />
      <div className="flex text-[0.8em] justify-between w-full">
        <p>Product</p>
        <p>Content</p>
        <p>Finance</p>
        <p>Design</p>
      </div>
    </div>
  );
};

export default TopJobCategories;
