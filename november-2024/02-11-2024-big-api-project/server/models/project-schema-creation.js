import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: [3, "first name must be more than 3 letters."],
  },
  description: {
    type: String,
    required: true,
    min: [3, "Description must contain more than 3 letters."],
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    default: "Not Started",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users-databases",
    required: true,
  },
});

export const projectModelSchema = mongoose.model(
  "projects-databases",
  projectSchema
);
