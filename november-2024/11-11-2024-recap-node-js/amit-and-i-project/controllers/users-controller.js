const isFalsy = require("../utils/is-falsy.js");
const { userModel } = require("../models/user-schema.js");

const getAllUsers = async (req, res) => {
  try {
    const getAllUsers = await userModel.find();

    isFalsy(getAllUsers);

    res.status(200).json({
      message: "Success",
      response: getAllUsers,
    });
  } catch (error) {
    res.status(404).json({
      message: `Error occurred while getting all users: ${error}`,
    });
  }
};

const updateUserFullData = async (req, res) => {
  const userId = req.params.id;
  const { user, password, email } = req.body;
  try {
    const isUpdated = await userModel.findByIdAndUpdate({
      userId,
      user,
      password,
      email,
    });

    isFalsy(isUpdated);

    res.status(201).json({
      message: "Success",
      response: `User has been updated: ${newUser}`,
    });
  } catch (error) {
    res.status(404).json({
      message: `Error occurred while updating user ID ${userId}: ${error}`,
    });
  }
};

const partialUpdateUser = async (req, res) => {
  const userId = req.params.id;
  const { user, password, email } = req.body;
  try {
    const isUpdated = await userModel.findByIdAndUpdate({
      userId,
      user,
      password,
      email,
    });

    isFalsy(isUpdated);

    res.status(201).json({
      message: "Success",
      response: `User has been updated: ${newUser}`,
    });
  } catch (error) {
    res.status(404).json({
      message: `Error occurred while updating user ID ${userId}: ${error}`,
    });
  }
};

const createNewUser = async (req, res) => {
  const { user, password, email } = req.body;

  try {
    const newUser = await userModel.create({
      user,
      password,
      email,
    });

    isFalsy(newUser);

    res.status(201).json({
      message: "Success",
      response: `User has been created: ${newUser}`,
    });
  } catch (error) {
    res.status(404).json({
      message: `Error occurred while creating a new user: ${error}`,
    });
  }
};

const deleteUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const deleteUser = userModel.findByIdAndDelete(userId);

    isFalsy(deleteUser);

    res.status(200).json({
      message: "Success",
      response: `User ${userId} has been successfully deleted.`,
    });
  } catch (error) {
    res.status(404).json({
      message: `Error occurred while deleting user ID ${userId}: ${error}`,
    });
  }
};

module.exports = {
  getAllUsers,
  updateUserFullData,
  partialUpdateUser,
  createNewUser,
  deleteUserById,
};
