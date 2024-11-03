import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
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
});

const bookModel = mongoose.model("Book", bookSchema);

bookSchema.virtual("fullTitle").get(() => {
  `${this.title} by ${this.author}`;
});

export default bookModel;
