import { statsStyle } from "@/utils/stylesWarehouse";
import React from "react";
import { BsDot } from "react-icons/bs";
import { PiOpenAiLogoThin } from "react-icons/pi";

const DesignerEngineer = () => {
  return (
    <div className={`${statsStyle}`}>
      <div className="flex items-center justify-between w-full ">
        <div>
          <PiOpenAiLogoThin style={{ fontSize: "2em" }} />
        </div>
        <div>
          <p>Designer Engineer</p>
          <div className="flex">
            <p>ChatGPT</p>
            <BsDot />
            <p>Remote</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerEngineer;
