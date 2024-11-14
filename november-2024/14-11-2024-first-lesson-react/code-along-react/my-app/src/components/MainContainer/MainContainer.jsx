import "./MainContainer.css";
import Head from "../Head/Head";
import Recipe from "../Recipe/Recipe";
import React from "react";

const MainContainer = () => {
  return (
    <div className="main-container">
      Main Container
      <Head />
      <Recipe />
    </div>
  );
};

export default MainContainer;
