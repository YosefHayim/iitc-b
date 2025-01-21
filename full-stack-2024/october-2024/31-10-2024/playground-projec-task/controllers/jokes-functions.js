import { isKeysValid } from "../middleware/check-body-keys-valid.js";
import { isFalsy } from "../middleware/is-falsy.js";
import { jokesProjectSchema } from "../models/jokes-project-schema.js";

const getJokeById = async (req, res, next) => {
  const jokeId = req.params.id;

  isFalsy(jokeId,next);

  try {
    const findJokeById = await jokesProjectSchema.findById(jokeId);

    isFalsy(findJokeById,next);

    res.status(200).json({
      message: "Success Found your joke!",
      dataFound: findJokeById,
    });
  } catch (error) {
    next({ type: `NOT_FOUND` });
  }
};

const getAllJokes = async (req, res, next) => {
  try {
    const data = await jokesProjectSchema.find();
    res.status(200).json(data);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
};

const createNewJokes = async (req, res, next) => {
  const { name, text, providerName, favoritePizzaToppings } = req.body;

  isKeysValid(req.body, next);

  try {
    const newJoke = new jokesProjectSchema({
      name,
      text,
      providerName,
      favoritePizzaToppings,
    });
    const savedJoke = await newJoke.save();
    res.status(201).json({
      message: "Success joke has been added",
      dataReceived: savedJoke,
    });
  } catch (error) {
    next({ type: "SERVER_ERROR", message: "Failed to save the joke" });
  }
};

const updateJokeById = async (req, res, next) => {
  const jokeId = req.params.id;

  isFalsy(jokeId,next);

  const { name, text, providerName, favoritePizzaToppings } = req.body;

  try {
    const updatedJoke = await jokesProjectSchema.findOneAndUpdate(
      { _id: jokeId },
      { name, text, providerName, favoritePizzaToppings },
      { new: true }
    );

    isFalsy(updatedJoke,next);

    res.status(200).json(updatedJoke);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
};

const deleteJokeById = async (req, res, next) => {
  const jokeId = req.params.id;

  isFalsy(jokeId,next);

  try {
    const deletedJoke = await jokesProjectSchema.findByIdAndDelete(jokeId);

    isFalsy(deletedJoke,next);

    res
      .status(200)
      .json({ message: `Joke with ID ${jokeId} successfully deleted` });
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
};

export {
  getJokeById,
  getAllJokes,
  createNewJokes,
  updateJokeById,
  deleteJokeById,
};
