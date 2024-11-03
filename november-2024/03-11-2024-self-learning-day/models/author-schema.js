import mongoose, { mongo } from "mongoose";

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
});

const author = mongoose.model("Author", authorSchema);

export default author;