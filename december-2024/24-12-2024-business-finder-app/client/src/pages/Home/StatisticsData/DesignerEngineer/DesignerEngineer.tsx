import { statsStyle } from "@/utils/stylesWarehouse";
import { BsDot } from "react-icons/bs";
import { PiOpenAiLogoThin } from "react-icons/pi";

const DesignerEngineer = () => {
  return (
    <div className={`${statsStyle}`}>
      <div className="flex items-center justify-center w-full gap-[0.5em]">
        <div className="border border-gray-200 p-[0.5em] rounded-[100em]">
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
