import express from "express";
import {
  getAllJokes,
  createNewJoke,
  updateJokeById,
  deleteJokeById,
} from "../controller/jokes-controller.js";

const router = express.Router();

// Fetch all jokes
router.get("/all", getAllJokes);

// Create a new joke
router.post("/create", createNewJoke);

// update joke text by ID
router.patch("/update/:id", updateJokeById);

// delete a joke
router.delete("/delete/:id", deleteJokeById);

export default router;
