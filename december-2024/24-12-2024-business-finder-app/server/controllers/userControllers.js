const mongoose = require("mongoose");
const { User } = require("../models/userModel");
const { generateToken } = require("../utils/auth");
const { emailSender } = require("../utils/emailSender");

// Get all users
getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      const error = new Error("No users found.");
      error.statusCode = 404; // Not Found
      throw error;
    }
    res.status(200).json({
      status: "Login Successfully",
      total: users.length,
      response: users,
    });
  } catch (error) {
    const err = error.statusCode ? error : new Error("Failed to fetch users.");
    err.statusCode = error.statusCode || 500; // Internal Server Error
    next(err);
  }
};

// Get a specific user by ID
getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("Invalid user ID format.");
      error.statusCode = 400; // Bad Request
      throw error;
    }

    const user = await User.findById(id);
    if (!user) {
      const error = new Error("User not found.");
      error.statusCode = 404; // Not Found
      throw error;
    }

    res.status(200).json(user);
  } catch (error) {
    const err = error.statusCode
      ? error
      : new Error("Failed to get user by ID.");
    err.statusCode = error.statusCode || 500; // Internal Server Error
    next(err);
  }
};

// Create a new user
createUser = async (req, res, next) => {
  try {
    const userData = req.body;

    if (!userData || !userData.email || !userData.name || !userData.password) {
      const error = new Error("Missing required user fields.");
      error.statusCode = 400; // Bad Request
      throw error;
    }

    const newUser = await User.create(userData);
    res.status(201).json({ message: "User created.", user: newUser });
  } catch (error) {
    const err = error.statusCode ? error : new Error("Failed to create user.");
    err.statusCode = error.statusCode || 400; // Bad Request for validation issues
    next(err);
  }
};

// Validate user in db
const validateUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const isUser = await User.findOne({ email });

    if (password === isUser.password) {
      const payload = {
        id: isUser._id,
        profileImg: isUser.profileImg,
        plan: isUser.plan,
        name: isUser.name,
      };

      const token = await generateToken(payload);

      res.cookie("cookie", token, {
        httpOnly: false,
        secure: false,
        maxAge: 60 * 60 * 1000,
      });

      res.status(200).json({
        status: "Success",
        cookie: token,
      });
    }

    const error = new Error("Email or password are incorrect. ");
    error.statusCode = 404; // Not Found
    throw error;
  } catch (error) {
    next(error);
  }
};

// Update a user by ID
updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("Invalid user ID format.");
      error.statusCode = 400; // Bad Request
      throw error;
    }

    const userData = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, userData, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      const error = new Error("User not found.");
      error.statusCode = 404; // Not Found
      throw error;
    }

    res.status(200).json({ message: "User updated.", user: updatedUser });
  } catch (error) {
    const err = error.statusCode ? error : new Error("Failed to update user.");
    err.statusCode = error.statusCode || 500; // Internal Server Error
    next(err);
  }
};

// Delete a user by ID
deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("Invalid user ID format.");
      error.statusCode = 400; // Bad Request
      throw error;
    }

    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      const error = new Error("User not found.");
      error.statusCode = 404; // Not Found
      throw error;
    }

    res.status(200).json({ message: "User deleted." });
  } catch (error) {
    const err = error.statusCode ? error : new Error("Failed to delete user.");
    err.statusCode = error.statusCode || 500; // Internal Server Error
    next(err);
  }
};

const contactUsEmail = async (req, res, next) => {
  const { email, message, subject, name } = req.body;
  console.log(email, message, subject, name);

  try {
    // Send email using the email sender function
    const isSend = await emailSender(email, subject, message, name);

    if (isSend) {
      return res.status(200).json({
        status: "success",
        response: "Request has been successfully sent",
      });
    } else {
      throw new Error("Failed to send email.");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    const err = error.statusCode
      ? error
      : new Error("Failed to send email to user.");
    err.statusCode = error.statusCode || 500;
    next(err);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  validateUser,
  contactUsEmail,
};
