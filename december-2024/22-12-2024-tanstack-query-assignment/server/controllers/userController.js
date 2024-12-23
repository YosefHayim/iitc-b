const User = require("../models/userModel");

// Create a new user
const createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      const error = new Error(
        "All fields (firstName, lastName, email, password) are required"
      );
      error.statusCode = 400;
      throw error;
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("A user with this email already exists");
      error.statusCode = 409; // Conflict
      throw error;
    }

    const newUser = new User({ firstName, lastName, email, password });
    const savedUser = await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: savedUser });
  } catch (error) {
    next(error);
  }
};

// Get a user by email
const getUser = async (req, res, next) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email });

    if (!user) {
      const error = new Error(`User with email '${email}' not found`);
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

// Update a user
const updateUser = async (req, res, next) => {
  try {
    const { email } = req.params;
    const updates = req.body;

    if (!Object.keys(updates).length) {
      const error = new Error("No fields provided to update");
      error.statusCode = 400;
      throw error;
    }

    const updatedUser = await User.findOneAndUpdate({ email }, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      const error = new Error(`User with email '${email}' not found`);
      error.statusCode = 404;
      throw error;
    }

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    next(error);
  }
};

// Delete a user
const deleteUser = async (req, res, next) => {
  try {
    const { email } = req.params;

    const deletedUser = await User.findOneAndDelete({ email });

    if (!deletedUser) {
      const error = new Error(`User with email '${email}' not found`);
      error.statusCode = 404;
      throw error;
    }

    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
