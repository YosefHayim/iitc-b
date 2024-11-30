const isFalsy = require("../utils/isFalsy");
const userSchema = require("../models/userSchema");
const securePw = require("../utils/hashPw");
const compareHashPw = require("../utils/compareHashPw");
const generateToken = require("../utils/generateToken");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userSchema.find();

    if (isFalsy(allUsers)) {
      return res.status(404).json({ message: "No users found." });
    }

    res.status(200).json({
      message: "Success",
      response: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve users.",
      error: error.message,
    });
    console.error("Error retrieving users:", error);
  }
};

const createUser = async (req, res) => {
  const { email, fName, lName, password } = req.body;

  const hashedPassword = await securePw(password);

  try {
    const newUser = await userSchema.create({
      email,
      fName,
      lName,
      password: hashedPassword,
    });

    if (!newUser) {
      return res.status(404).json({ message: "Couldn't create new user" });
    }

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while registering new user.",
      error: error.message,
    });
    console.error("Error occurred:", error);
  }
};

const validateUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await userSchema.findOne({ email });

    if (!userData) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    await compareHashPw(password, userData.password);

    const userObj = {
      email: userData.email,
      fName: userData.fName,
    };

    const token = await generateToken(userObj);

    // Set the cookie before sending the response
    res.cookie("token", token, {
      httpOnly: false, // NOTE: For production, set this to `true` to prevent JavaScript access.
      secure: true, // Ensure the cookie is sent over HTTPS.
      sameSite: "strict", // Prevent cross-site requests.
      maxAge: 3600000, // Cookie lifespan of 1 hour (in milliseconds).
    });

    // Then send the JSON response
    res.status(200).json({
      message: "Success",
      response: "Successfully logged in",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while validating user the request.",
      error: error.message,
    });
    console.error("Error occurred while validating user the request.", error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  validateUser,
};
