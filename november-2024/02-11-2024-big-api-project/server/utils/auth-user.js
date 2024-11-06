import bcrypt from "bcrypt";
import { isFalsy } from "./is-falsy.js";

const isPasswordValid = (password, hashedPw) => {
  isFalsy(password && hashedPw);

  try {
    const successAuth = bcrypt.compare(password, hashedPw);
    return successAuth
      ? successAuth
      : `Authorization fails, password doesn't match`;
  } catch (error) {
    console.error(`Error occurred while comparing between passwords: ${error}`);
  }
};

export { isPasswordValid };
