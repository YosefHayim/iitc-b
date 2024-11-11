const express = require("express");
const { userModel } = require("../models/user-schema.js");
const isFalsy = require("../middlewares/is-falsy.js");
const getAllUsers = require("../controllers/users-controller.js");

const usersRoute = express.Router();

usersRoute.get("/users", getAllUsers);

usersRoute.post("/user", async (req, res) => {
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
});

usersRoute.put("/user/:id",);

usersRoute.patch("/user/:id", async (req, res) => {
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
});

usersRoute.delete("/user/:id", (req, res) => {
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
});

module.exports = usersRoute;
