import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// payload is the object of user data without pw
const generateToken = async (payload) => {
  const token = await jwt.sign(payload, process.env.SECRET_TOKEN_ADDITION, {
    expiresIn: "1h",
  });
  return token;
};

const verifyToken = async (payload) => {
  const token = await jwt.verify(payload, process.env.SECRET_TOKEN_ADDITION);
  return token;
};

const comparePw = async (userPassword, dbPassword) => {
  try {
    const match = await bcrypt.compare(userPassword, dbPassword);
    return match;
  } catch (err) {
    throw new Error("Error during password comparison: " + err);
  }
};

const hashPw = async (userPassword) => {
  const res = await bcrypt.genSalt((err, salt) => {
    bcrypt.hash(userPassword, salt, (err, hash) => {
      if (err)
        throw new Error("Error occurred during hashing password: " + err);
      return hash;
    });
  });
  return res;
};

module.exports = { hashPw, generateToken, verifyToken, comparePw };
