import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  providerName: {
    type: String,
    required: true,
  },
  favoritePizzaToppings: {
    type: String,
  },
});

export const jokesProjectSchema = mongoose.model("JokesProject", jokeSchema);
