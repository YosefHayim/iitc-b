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

authorSchema.virtual("bookCount", {
  ref: "Book",
  localField: "_id",
  foreignField: "author",
  count: true, 
});

const authorModel = mongoose.model("Author", authorSchema);

export default authorModel;
