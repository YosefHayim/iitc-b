import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      default: 0,
      validate: {
        validator: function (value) {
          return value >= 1 && value <= 5;
        },
        message: (props) =>
          `${props.value} is invalid. Please provide a rating between 1 and 5.`,
      },
    },
    comment: {
      type: String,
      minlength: [1, "Comment must be at least 1 character long."],
      maxlength: [50, "Comment cannot exceed 50 characters."],
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
  }
);

const reviewModel = mongoose.model("Review", reviewSchema);

export default reviewModel;
