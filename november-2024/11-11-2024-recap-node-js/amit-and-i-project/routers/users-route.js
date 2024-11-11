const express = require("express");
const {
  getAllUsers,
  partialUpdateUser,
  updateUserFullData,
  createNewUser,
  deleteUserById,
} = require("../controllers/users-controller.js");

const usersRoute = express.Router();

usersRoute.get("/users", getAllUsers);

usersRoute.post("/user", createNewUser);

usersRoute.put("/user/:id", updateUserFullData);

usersRoute.patch("/user/:id", partialUpdateUser);

usersRoute.delete("/user/:id", deleteUserById);

module.exports = usersRoute;
