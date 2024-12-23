import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import MediaIcons from "../MediaIcons/MediaIcons";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center">
      <div className="flex flex-col items-center justify-center mb-[2em] w-[400px]">
        <h1 className="text-[1.3em]">Subscribe to Our Popular Newsletter</h1>
        <p className="mt-[1em]">
          Stay updated with the latest trends and insights delivered to your
          inbox.
        </p>
        <div className="p-[1em] bg-white shadow-newsLetterShadow rounded-[0.5em]">
          <div className="flex flex-row flex-wrap w-full justify-between items-center gap-[1em] ">
            <Input type="text" placeholderText="Enter your email" />
            <Button text="Join today!" />
          </div>
        </div>
        <MediaIcons />
      </div>
    </div>
  );
};

export default NewsLetter;
