import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    enum: ["Not Started", "In Progress", "Completed"],
    default: "Not Started",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const projectModelSchema = mongoose.model(
  "projects-database",
  projectSchema
);
