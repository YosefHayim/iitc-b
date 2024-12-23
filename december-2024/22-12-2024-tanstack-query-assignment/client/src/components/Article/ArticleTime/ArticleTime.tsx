import React from "react";
import { LuDot } from "react-icons/lu";

const ArticleTime = ({ mintuesToRead }) => {
  return (
    <div className="flex">
      <LuDot />
      <p>{mintuesToRead || "4 min"}</p>
    </div>
  );
};

export default ArticleTime;
