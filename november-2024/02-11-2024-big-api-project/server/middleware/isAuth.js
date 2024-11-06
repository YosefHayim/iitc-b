import jwt from "jsonwebtoken";

const isTokenValid = async (req, res, next) => {
  const token = req.body.token;

  if (!token) {
    res.status(401).json({
      message: "Failed",
      response: "Token is missing.",
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_JWT);
    if (decoded) {
      res.status(200).json({
        message: "Success",
        response: "You are logged in.",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Failed",
      response: "You are Unauthorized.",
    });
  }

  next();
};

export { isTokenValid };
