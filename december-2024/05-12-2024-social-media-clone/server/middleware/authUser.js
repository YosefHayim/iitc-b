const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function parseCookie(cookie) {
  try {
    let result = {};
    if (cookie) {
      // console.log("cookie: ", cookie);
      const cookies = cookie.split("; ");
      // console.log("cookies",cookies);
      cookies.forEach((cookie) => {
        const pair = cookie.split("=");
        result[`${pair[0]}`] = pair[1];
      });
      // console.log("cookie parser result:",result);
    }
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function authUser(req, res, next) {
  try {
    let token;
    let decoded;

    if (req.headers.authorization) {
      const [type, credentials] = req.headers.authorization.split(" ");
      if (type === "Bearer") {
        token = credentials;
      }
    }

    if (!token && req.headers.cookie) {
      const cookies = parseCookie(req.headers.cookie);
      token = cookies.jwt;
    }

    if (!token) {
      return res
        .status(401)
        .json({ message: "Session expired. Please log in again." });
    }

    try {
      decoded = jwt.verify(token, "secretKey");
    } catch (error) {
      return res.status(401).json({ message: "Invalid or expired token." });
    }

    req.user = decoded.user;
    console.log("authUser says: request by user:", decoded.user);
    next();
  } catch (error) {
    console.error("authUser error:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
}

module.exports = { authUser };
