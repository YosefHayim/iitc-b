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
  createdAt: {
    type: String,
    default: new Date().toLocaleDateString("en-US"),
  },
});

export const taskModelSchema = mongoose.model("tasks-databases", taskSchema);
