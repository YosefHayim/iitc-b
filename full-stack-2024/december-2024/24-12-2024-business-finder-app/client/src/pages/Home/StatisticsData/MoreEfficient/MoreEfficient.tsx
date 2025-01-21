import { statsStyle } from "@/utils/stylesWarehouse";
import React from "react";
import { FaBoltLightning } from "react-icons/fa6";

const MoreEfficient = () => {
  return (
    <div className={`${statsStyle}`}>
      <div className="flex items-center justify-center w-full">
        <div className=" rounded-[100em] p-[0.5em] bg-pink-400">
          <FaBoltLightning style={{ fontSize: "2em", color: "white" }} />
        </div>
        <div>
          <h1>80%</h1>
          <p>More Efficient</p>
        </div>
      </div>
    </div>
  );
};

export default MoreEfficient;
