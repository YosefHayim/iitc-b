import express from "express";
import { jokesProjectSchema } from "../middleware/jokes-project-schema.js";

const router = express.Router();

const fetchJokeP = async () => {
  try {
    const allJokes = await jokesProjectSchema.find();
    return allJokes;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

// Fetch all jokes
router.get("/all/Jokes", async (req, res) => {
  try {
    const data = await fetchJokeP();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jokes", error });
  }
});

// Create a new joke
router.post("/create/joke", async (req, res) => {
  // Shortcut to get all the body keys.
  const { name, text, providerName, favoritePizzaToppings } = req.body;

  if (!name || !text || !providerName || !favoritePizzaToppings) {
    return res.status(400).send("Please provide all required parameters: ");
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
    res.status(500).json({ message: "Error creating project", error });
  }
});

export default router;
