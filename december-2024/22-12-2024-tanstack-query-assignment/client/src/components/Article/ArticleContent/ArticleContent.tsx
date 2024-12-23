import React from "react";

const ArticleContent = ({ contentPost }) => {
  return (
    <div>
      <p className="text-gray-600">
        {contentPost ||
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam voluptates cum sed porro..."}
      </p>
    </div>
  );
};

export default ArticleContent;
