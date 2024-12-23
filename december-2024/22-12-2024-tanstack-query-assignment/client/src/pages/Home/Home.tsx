import React from "react";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import RandomPostView from "../../components/RandomPostView/randomPostView";

const Home = () => {
  return (
    <div>
      <NewsLetter />
      <div className="flex flex-row flex-wrap items-center justify-start">
        <RandomPostView />
      </div>
    </div>
  );
};

export default Home;
