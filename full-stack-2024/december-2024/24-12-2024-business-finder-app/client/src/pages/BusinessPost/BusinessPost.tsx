import { Button } from "@/components/ui/button";
import { btnStyle, centerDesign, jobTextSize } from "@/utils/stylesWarehouse";
import { CiBookmark, CiClock2, CiDollar, CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import logo from "/images/logo.svg";

const BusinessPost = () => {
  return (
    <div>
      <div className="p-[1em] bg-gray-100 rounded-[1em] w-[300px] flex flex-col items-center justify-center gap-[0.5em] mt-[1em]">
        <div className="flex flex-col bg-white text-black rounded-[1em] w-[250px] p-[0.5em] gap-[0.5em]">
          <div className="flex items-center justify-between">
            <div className="border border-gray-200 rounded-[100em]">
              <img src={logo} alt="" className="h-[2em]" />
            </div>
            <p>Gojek</p>
            <div className="border border-gray-200 rounded-[100em] p-[0.5em] hover:bg-black hover:text-white cursor-pointer">
              <CiBookmark />
            </div>
          </div>
          <hr />
          <h3>Product Designer</h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className={`${centerDesign}`}>
              <CiLocationOn />
              <p className={`${jobTextSize}`}>Jakarta, Indonesia</p>
            </div>
            <div className={`${centerDesign}`}>
              <CiClock2 />
              <p className={`${jobTextSize}`}>Full time</p>
            </div>
            <div className={`${centerDesign}`}>
              <HiOutlineBuildingOffice2 />
              <p className={`${jobTextSize}`}>Technology</p>
            </div>
            <div className={`${centerDesign}`}>
              <CiDollar />
              <p className={`${jobTextSize}`}>$400/monthly</p>
            </div>
          </div>
          <div>
            <Button className={`${btnStyle} w-full ml-[0em]`}>Apply</Button>
          </div>
        </div>
        <p>POSTED YESTERDAY</p>
      </div>
    </div>
  );
};

export default BusinessPost;
