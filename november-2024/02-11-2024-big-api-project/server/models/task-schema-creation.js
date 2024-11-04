import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: [3, "Title must be more than 3 letters."],
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["To Do", "In progress", "Done"],
    default: "To Do",
  },
  dueDate: {
    type: Date,
    validate: {
      validator: function (value) {
        // Ensures dueDate is at least tomorrow
        return value > new Date();
      },
      message: "Due date must be in the future.",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects-databases",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users-databases",
    required: true,
  },
});

export const taskModelSchema = mongoose.model("tasks-databases", taskSchema);
