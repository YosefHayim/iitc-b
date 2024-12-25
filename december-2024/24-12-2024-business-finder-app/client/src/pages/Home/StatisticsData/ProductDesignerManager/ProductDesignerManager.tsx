import { statsStyle } from "@/utils/stylesWarehouse";
import React from "react";
import { BsDot } from "react-icons/bs";
import { PiDotsSixVerticalLight } from "react-icons/pi";

const ProductDesignerManager = () => {
  return (
    <div className={`${statsStyle}`}>
      <div className="flex">
        <div className="flex items-center ">
          <PiDotsSixVerticalLight style={{ fontSize: "2em" }} />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[0.9em]">Product Designer Manager</p>
          <div className="flex">
            <p>Figma</p>
            <BsDot />
            <p>Full Time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesignerManager;
