import { taskModelSchema } from "../models/task-schema-creation.js";
import mongoose from "mongoose";

const createNewTask = async (req, res) => {
  let tasks = req.body;

  try {
    // Check if `users` is not an array
    if (!Array.isArray(tasks)) {
      // If `tasks` is a single object, perform a single insertion
      const { title, description, status, dueDate } = tasks;

      const newTask = new taskModelSchema({
        title,
        description,
        status,
        dueDate,
      });

      const savedTask = await newTask.save();
      return res.status(201).json({
        message: "Task added successfully",
        data: savedTask,
      });
    }

    // If `users` is an array, perform a batch insertion
    const tasksDocs = tasks.map((task) => {
      const { title, description, status, dueDate } = task;

      return {
        title,
        description,
        status,
        dueDate,
      };
    });

    const savedTasks = await taskModelSchema.insertMany(tasksDocs);

    res.status(201).json({
      message: "All tasks added successfully",
      data: savedTasks,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error adding tasks: ${error}`,
    });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await taskModelSchema.find();

    if (allTasks) {
      res.status(200).json(allTasks);
    } else {
      res.status(404).send(`The requested schema not found.`);
    }
  } catch (error) {
    console.error(`Something happened while fetching the data: ${error}`);
  }
};

const updateSpecificTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;

    const { title, description, status, dueDate } = req.body;

    // Build the update object only with fields provided in the request body
    const updateFields = {};
    if (title) updateFields.title = title;
    if (description) updateFields.description = description;
    if (status) updateFields.status = status;
    if (dueDate) updateFields.dueDate = dueDate;

    // Update the user in the database
    const updatedTask = await taskModelSchema.findByIdAndUpdate(
      taskId,
      // Set is a built-in method of mongoose to only modify provided data so other data wont be deleted.
      { $set: updateFields },
      { new: true } // to return the updated document
    );

    res.send(updatedTask);
  } catch (error) {
    res.status(500).send("Error updating user data");
  }
};

const deleteSpecificTaskById = async (req, res) => {
  const taskId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    return res.status(400).json({
      message:
        "Invalid ID format. Please provide a valid 24 letters length ID.",
    });
  }

  const isTaskExist = await taskModelSchema.exists({ _id: taskId });

  if (isTaskExist) {
    try {
      const deleted = await taskModelSchema.findByIdAndDelete(taskId);
      if (deleted) {
        return res.status(200).json({
          message: `user ID: ${taskId} has been successfully deleted from the database.`,
        });
      }
    } catch (error) {
      console.error(`Something went wrong while performing the delete.`, error);
      return res.status(500).json({
        message: "An error occurred while deleting the user.",
      });
    }
  } else {
    res.status(404).json({
      message: `We were unable to find the user with ID: ${userId}.`,
    });
  }
};

export {
  getAllTasks,
  createNewTask,
  updateSpecificTaskById,
  deleteSpecificTaskById,
};
