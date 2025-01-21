import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { statsStyle } from "../../../../utils/stylesWarehouse";

const CustomerSuccess = () => {
  return (
    <div className={`${statsStyle}`}>
      <div>
        <p className="text-center">Customer Success</p>
        <div className="flex justify-around items-center gap-[1em]">
          <img
            className="h-[2em] w-[2em] rounded-[100em]"
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk="
            alt=""
          />
          <h2>7.89%</h2>
          <div className="flex justify-center items-center bg-pink-600 rounded-[100em] text-white px-[0.3em] py-[0.1em]">
            <p>50%</p>
            <IoIosArrowRoundUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSuccess;
