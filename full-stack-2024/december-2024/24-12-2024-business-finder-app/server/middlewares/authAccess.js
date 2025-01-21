const jwt = require("jsonwebtoken");

const isUserAuth = (req, res, next) => {
  // Extract token from cookies or Authorization header
  const tokenFromCookie = req.cookies?.cookie; // Replace 'cookie' with the name of the cookie storing the token
  const tokenFromHeader = req.headers["authorization"]?.split(" ")[1]; // Extract token from Authorization header

  const token = tokenFromCookie || tokenFromHeader;

  if (!token) {
    const error = new Error(
      "Unauthorize access you do not have token, please login first."
    );
    error.statusCode = 404; 
    throw error;
  }

  res.status(200).json({
    message: "User is verified",
  });

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN_ADDITION); // Replace with your secret key

    if (!decoded) {
      const error = new Error("Error while decode token");
      error.statusCode = 404; 
      throw error;
    }
    req.user = decoded; // Attach decoded user info to the request
    next(); // Pass control to the next middleware or route handler
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = { isUserAuth };
