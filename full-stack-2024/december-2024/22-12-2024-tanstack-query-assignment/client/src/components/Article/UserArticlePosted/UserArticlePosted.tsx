import React from "react";
import profileUser from "../../../../public/profile-img-placeholder.svg";

const UserArticlePosted = ({ userPosted }) => {
  return (
    <div className="flex flex-row flex-wrap gap-[1em] justify-start items-center">
      <img src={profileUser} alt="" className="rounded-[100em] h-[2em]" />
      <p>{userPosted || "Clelia Pavanetto"}</p>
    </div>
  );
};

export default UserArticlePosted;
