import express from "express";
import {
  createNewJokes,
  deleteJokeById,
  getAllJokes,
  getJokeById,
  updateJokeById,
} from "../controllers/jokes-functions.js";

const router = express.Router();

// Get joke by Id
router.get("/:id", getJokeById);

// Fetch all jokes
router.get("", getAllJokes);

// Create a new joke
router.post("", createNewJokes);

// Update a joke by ID
router.put("/:id", updateJokeById);

// Delete a joke by ID
router.delete("/:id", deleteJokeById);

export default router;
