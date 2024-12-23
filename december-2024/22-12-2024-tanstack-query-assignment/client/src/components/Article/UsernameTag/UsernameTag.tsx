import React from "react";
import { usernameDesignBtn } from "../../../utils/designStyles";

const UsernameTag = ({ username }) => {
  if (!username) {
    return;
  }

  return (
    <div className={`${usernameDesignBtn}`}>
      <p>{username || "Master Skello"}</p>
    </div>
  );
};

export default UsernameTag;
