import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
    publishedDate: {
      type: Date,
      validate: {
        validator: function (date) {
          return date < Date.now();
        },
        message: (props) => `The date ${props.value} can't be in the future.`,
      },
    },
    genre: {
      type: String,
    },
    averageRating: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
  }
);

bookSchema.virtual("fullTitle").get(function () {
  return `${this.title} by ${this.author.name}`;
});

bookSchema.virtual("reviewCount", {
  ref: "Review",
  localField: "_id",
  foreignField: "book",
  count: true,
});

const bookModel = mongoose.model("Book", bookSchema);

export default bookModel;
