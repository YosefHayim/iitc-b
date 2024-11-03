import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
  }
);

const authorModel = mongoose.model("Author", authorSchema);

export default authorModel;
