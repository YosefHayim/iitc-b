import React from "react";

const ArticleTitle = ({ titleTxt }) => {
  return (
    <div>
      <h2>
        {titleTxt ||
          "Comment skello a reussi la migration vers son nouveau design?"}
      </h2>
    </div>
  );
};

export default ArticleTitle;
