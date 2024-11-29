const isFalsy = require("../utils/isFalsy");
const userSchema = require("../models/userSchema");

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

  try {
    const newUser = await userSchema.create({
      email,
      fName,
      lName,
      password,
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

module.exports = {
  getAllUsers,
  createUser,
};
