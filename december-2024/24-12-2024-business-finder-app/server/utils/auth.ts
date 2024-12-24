import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { dbPw, Payload, Up } from "../types/types";

// payload is the object of user data without pw
const generateToken = async (payload: Payload) => {
  const token = await jwt.sign(payload, process.env.SECRET_TOKEN_ADDITION, {
    expiresIn: "1h",
  });
  return token;
};

const verifyToken = async (payload: Payload) => {
  const token = await jwt.verify(payload, process.env.SECRET_TOKEN_ADDITION);
  return token;
};

const comparePw = async (userPassword: Up, dbPassword: dbPw) => {
  try {
    const match = await bcrypt.compare(userPassword, dbPassword);
    return match;
  } catch (err) {
    throw new Error("Error during password comparison: " + err);
  }
};

const hashPw = async (userPassword: Up) => {
  const res = await bcrypt.genSalt((err: any, salt: Number) => {
    bcrypt.hash(userPassword, salt, (err: any, hash: string) => {
      if (err)
        throw new Error("Error occurred during hashing password: " + err);
      return hash;
    });
  });
  return res;
};

module.exports = { hashPw, generateToken, verifyToken, comparePw };
