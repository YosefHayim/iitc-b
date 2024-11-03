import express from "express";
import { jokesProjectSchema } from "../modules/jokes-project-schema.js";

const router = express.Router();

// Fetch all jokes
router.get("", async (req, res, next) => {
  try {
    const data = await jokesProjectSchema.find();
    res.status(200).json(data);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
});

// Create a new joke
router.post("", async (req, res, next) => {
  const { name, text, providerName, favoritePizzaToppings } = req.body;

  for (const [key, value] of Object.entries(req.body)) {
    if (!value) {
      return next({ type: "VALIDATION_ERROR" });
    }
  }

  try {
    const newJoke = new jokesProjectSchema({
      name,
      text,
      providerName,
      favoritePizzaToppings,
    });
    const savedJoke = await newJoke.save();
    res.status(201).json(savedJoke);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
});

// Update a joke by ID
router.put("/:id", async (req, res, next) => {
  const jokeId = req.params.id;
  const { name, text, providerName, favoritePizzaToppings } = req.body;

  try {
    const updatedJoke = await jokesProjectSchema.findOneAndUpdate(
      { _id: jokeId },
      { name, text, providerName, favoritePizzaToppings },
      { new: true }
    );

    if (!updatedJoke) {
      return next({ type: "NOT_FOUND" });
    }

    res.status(200).json(updatedJoke);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
});

// Delete a joke by ID
router.delete("/:id", async (req, res, next) => {
  const jokeId = req.params.id;

  try {
    const deletedJoke = await jokesProjectSchema.findByIdAndDelete(jokeId);

    if (!deletedJoke) {
      return next({ type: "NOT_FOUND" });
    }

    res
      .status(200)
      .json({ message: `Joke with ID ${jokeId} successfully deleted` });
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
});

export default router;
