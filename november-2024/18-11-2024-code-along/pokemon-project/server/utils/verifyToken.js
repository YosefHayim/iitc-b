const jwt = require("jsonwebtoken");

const verifyToken = async (token) => {
  try {
    const decoded = await jwt.verify(token, process.env.SECRET_KEY_JWT);
    return decoded;
  } catch (error) {
    console.error("Error has been occurred durning validation of the token");
  }
};

module.exports = verifyToken;
