import express from "express";
import {
  createNewUsers,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from "../controllers/users-functions.js";

const router = express.Router();

// Get user by Id
router.get("/:id", getUserById);

// Fetch all users
router.get("", getAllUsers);

// Create a new user
router.post("", createNewUsers);

// Update an existing user by ID
router.put("/:id", updateUserById);

// Delete a user by ID
router.delete("/:id", deleteUserById);

export default router;
