import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  commentDescription: {
    type: String,
    required: true,
    minlength: [1, "Comment must be at least 1 letter."],
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects-databases",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users-databases",
    required: true,
  },
  createdAt: {
    type: String,
    default: new Date().toLocaleDateString("en-US"),
  },
});

export const commentModelSchema = mongoose.model(
  "comments-databases",
  commentSchema
);
