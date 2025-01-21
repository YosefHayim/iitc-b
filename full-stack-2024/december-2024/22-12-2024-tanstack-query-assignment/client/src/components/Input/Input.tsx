import React from "react";
import { inputDesign } from "../../utils/designStyles";

const Input = ({ placeholderText, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholderText}
      className={`${inputDesign}`}
    />
  );
};

export default Input;
