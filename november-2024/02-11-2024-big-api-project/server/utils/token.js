import jwt from "jsonwebtoken";

const generateToken = (payload) => {
  const secretKey = process.env.SECRET_JWT;
  const options = {
    expiresIn: "1h",
  };

  const token = jwt.sign(payload, secretKey, options);
  console.log(token);

  return token;
};

export { generateToken };
