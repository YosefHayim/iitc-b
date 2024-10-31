import express from "express";
import { jokesProjectSchema } from "../modules/jokes-project-schema.js";

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
router.get("/all", async (req, res) => {
  try {
    const data = await fetchJokeP();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jokes", error });
  }
});

// Create a new joke
router.post("/create", async (req, res) => {
  // Shortcut to get all the body keys.
  const { name, text, providerName, favoritePizzaToppings } = req.body;
  console.log(req.body);

  // for each key and his own value if it doesn't have a value.
  for (const [key, value] of Object.entries(req.body)) {
    if (!key || !value) {
      res
        .status(404)
        .send(
          `Sorry but one of your keys or values are missing in the body request: `,
          req.body
        );
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
    res.status(500).json({ message: "Error creating project", error });
  }
});

export default router;
