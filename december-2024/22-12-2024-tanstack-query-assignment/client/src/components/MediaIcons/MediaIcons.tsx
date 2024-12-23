import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { socialIconDesign } from "../../utils/designStyles";

const MediaIcons = () => {
  return (
    <div className="flex flex-row flex-wrap gap-[1em] mt-[1em] z-10">
      <div className={`${socialIconDesign}`}>
        <GrLinkedinOption />
      </div>
      <div className={`${socialIconDesign}`}>
        <RiTwitterXFill />
      </div>
      <div className={`${socialIconDesign}`}>
        <TiSocialFacebook />
      </div>
      <div className={`${socialIconDesign}`}>
        <FaInstagram />
      </div>
    </div>
  );
};

export default MediaIcons;
