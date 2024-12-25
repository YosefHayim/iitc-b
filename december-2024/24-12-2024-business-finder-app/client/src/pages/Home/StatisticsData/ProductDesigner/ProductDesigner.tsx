import { statsStyle } from "@/utils/stylesWarehouse";
import React from "react";
import { FaSpotify } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const ProductDesigner = () => {
  return (
    <div className={`${statsStyle}`}>
      <div className="flex w-full justify-center">
        <div>
          <FaSpotify style={{ fontSize: "2em", color: "pink" }} />
        </div>
        <div className="flex flex-col items-start">
          <h1>Product Designer</h1>
          <div className="flex items-center gap-[0.5em]">
            <p>Spotify</p>
            <MdVerified style={{ color: "blue" }} />
          </div>
        </div>
        <div>
          <FaBookmark style={{ fontSize: "2em", color: "pink" }} />
        </div>
      </div>
      <div>
        <div className="flex gap-[1em]">
          <p className="rounded-[100em] border border-gray-200 px-[0.5em]">
            Full Time
          </p>
          <p className="rounded-[100em] border border-gray-200 px-[0.5em]">
            Remote
          </p>
        </div>
        <div className="flex items-start">
          <CiLocationOn />
          <p className="text-[0.8em]">
            New York, America Serlikat <b>$152K</b>/month
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDesigner;
