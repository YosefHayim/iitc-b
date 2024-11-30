const jwt = require("jsonwebtoken");

const generateToken = async (userObj) => {
  const token = await jwt.sign(
    {
      userObj,
    },
    process.env.SECRET_KEY_JWT,
    { expiresIn: "1h" }
  );
  return token;
};

module.exports = generateToken;
