import React from "react";
import postImg from "../../../../public/post-img-placeholder.svg";

const ArticleImgPost = ({ imgProvided }) => {
  return (
    <div>
      <img
        src={postImg || imgProvided}
        alt=""
        className=" h-[100px] w-[400px] rounded-[0.5em]"
      />
    </div>
  );
};

export default ArticleImgPost;
