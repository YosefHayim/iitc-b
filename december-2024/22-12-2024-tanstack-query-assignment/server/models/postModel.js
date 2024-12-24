const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required"],
    },
    postImg: {
      type: String,
    },
    postContent: {
      type: String,
    },
    authorName: {
      type: String,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// Pre Hook: Sort by `createdAt`
postSchema.pre("find", function (next) {
  this.sort({ createdAt: -1 }); // Sort by newest to oldest
  next();
});

module.exports = mongoose.model("Post", postSchema);
