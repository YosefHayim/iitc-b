const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required"],
      minlength: [5, "Title must be at least 5 characters"],
    },
    postContent: {
      type: String,
      required: [true, "Post content is required"],
      minlength: [10, "Post content must be at least 10 characters"],
    },
    authorName: {
      type: String,
      required: [true, "Author name is required"],
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: [true, "Author ID is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
