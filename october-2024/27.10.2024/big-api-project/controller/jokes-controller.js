import { jokesProjectSchema } from "../models/jokes-project-schema.js";

// Fetch all jokes
const getAllJokes = async (req, res) => {
  try {
    const allJokes = await jokesProjectSchema.find();
    if (allJokes) {
      res.status(200).json(allJokes);
    } else {
      res.status(404).send(`The requested schema: ${allJokes}, not found.`);
    }
  } catch (error) {
    res.status(404).send(`There was error durning the promise: ${error}.`);
  }
};

const createNewJoke = async (req, res) => {
  // Shortcut to get all the body keys.
  const { name, text, providerName, favoritePizzaToppings } = req.body;

  // Check for missing keys or values in req.body.
  for (const [key, value] of Object.entries(req.body)) {
    if (!key || !value) {
      return res
        .status(404)
        .send(
          `Sorry, a key or value is missing in the body request: ${req.body}`
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
};

const updateJokeById = async (req, res) => {
  const updateText = req.body.text;
  const jokeId = req.params.id;

  try {
    const updatedSchema = await jokesProjectSchema.findByIdAndUpdate(
      jokeId,
      {
        text: updateText,
      },
      { new: true }
    );

    res.status(201).send(`Success, updated schema: ${updatedSchema}`);
  } catch (error) {
    res.status(400).send(`The Id: ${jokeId}, you provided isn't valid.`);
  }
};

const deleteJokeById = async (req, res) => {
  const jokeId = req.params.id;

  try {
    const updatedSchema = await jokesProjectSchema.findByIdAndDelete(jokeId);

    res
      .status(200)
      .send(`Success,ID: ${jokeId} Schema has been successfully deleted.`);
  } catch (error) {
    res
      .status(400)
      .send(
        `The Id: ${jokeId}, you provided isn't valid to delete the Schema.`
      );
  }
};

export { getAllJokes, createNewJoke, updateJokeById, deleteJokeById };
