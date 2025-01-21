import React from "react";
import { btnDesign } from "../../utils/designStyles";

const Button = ({ text }) => {
  return <button className={`${btnDesign} z-10`}>{text}</button>;
};

export default Button;
