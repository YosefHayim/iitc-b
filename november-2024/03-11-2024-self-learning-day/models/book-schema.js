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
    },
    genre: {
      type: String,
    },
    averageRating: {
      type: Number,
    },
  },
  {
    toJSON: { virtuals: true },
  }
);

bookSchema.virtual("fullTitle").get(function () {
  return `${this.title} by ${this.author.name}`;
});

const bookModel = mongoose.model("Book", bookSchema);

export default bookModel;
