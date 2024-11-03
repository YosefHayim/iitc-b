import mongoose, { mongo } from "mongoose";

const reviewSchema = new mongoose.model({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
});

const review = mongoose.model("Review", reviewSchema);

export default review;