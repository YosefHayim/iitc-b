import React from "react";
import UsernameTag from "../Article/UsernameTag/UsernameTag";
import ArticleTime from "../Article/ArticleTime/ArticleTime";
import ArticleTitle from "../Article/ArticleTitle/ArticleTitle";
import ArticleContent from "../Article/ArticleContent/ArticleContent";
import UserArticlePosted from "../Article/UserArticlePosted/UserArticlePosted";
import ArticleImgPost from "../Article/ArticleImgPost/ArticleImgPost";

const RandomPostView = () => {
  return (
    <div className="w-[400px] flex flex-col items-start justify-start gap-[1em]">
      <ArticleImgPost imgProvided="" />

      <div className="flex flex-row flex-wrap gap-[0.5em] items-center justify-start">
        <UsernameTag username="Notre requipe" />
        <ArticleTime mintuesToRead="" />
      </div>
      <ArticleTitle titleTxt="" />
      <ArticleContent contentPost="" />
      <UserArticlePosted userPosted="" />
    </div>
  );
};

export default RandomPostView;
