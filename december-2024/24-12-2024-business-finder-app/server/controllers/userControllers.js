const { default: mongoose } = require("mongoose");
const { User } = require("../models/userModel");

// Get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "Success",
      total: users.length,
      response: users,
    });
  } catch (error) {
    next(error);
  }
};

// Get a specific user by ID
exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Create a new user
exports.createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const newUser = await User.create(userData);
    res.status(201).json({ message: "User created.", user: newUser });
  } catch (error) {
    next(error);
  }
};

exports.updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Validate if the id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID format." });
    }

    const userData = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, userData, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User updated.", user: updatedUser });
  } catch (error) {
    next(error);
  }
};

// Delete a user by ID
exports.deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json({ message: "User deleted." });
  } catch (error) {
    next(error);
  }
};
