import React from "react";

const SinglePostView = ({ postTitle, postContent, authorName }) => {
  return (
    <div>
      <h1>Post Of</h1>
      <div>
        <h2>{postTitle || "Post title"}</h2>
        <p>{postContent || "Post Content"}</p>
        <p>{authorName || "authorName"}</p>
      </div>
    </div>
  );
};

export default SinglePostView;
