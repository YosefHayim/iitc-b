import "./styles/Head.css";
import React from "react";
import PrepTime from "./PrepTime";
import Intro from "./Intro";

const Head = () => {
  return (
    <div className="header-container">
      Header container
      <PrepTime />
      <Intro />
    </div>
  );
};

export default Head;
