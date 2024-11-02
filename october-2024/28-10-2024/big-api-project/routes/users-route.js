import express from "express";
import {
  createNewUser,
  deleteUserById,
  fetchUsers,
  updateUserEmailById,
} from "../controller/users-controller.js";

const router = express.Router();

// Fetch all users
router.get("/all", fetchUsers);

// Create a new user
router.post("/create", createNewUser);

// Update email of user
router.patch("/update/:id", updateUserEmailById);

// delete user by ID
router.delete("/delete/:id", deleteUserById);

export default router;
