import { taskModelSchema } from "../models/task-schema-creation.js";
import mongoose from "mongoose";

const createNewTask = async (req, res, next) => {
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

    if (savedTasks) {
      res.status(201).json({
        message: "All tasks added successfully",
        data: savedTasks,
      });
    } else {
      error.type = `NOT_ACCEPTABLE`;
      next(error);
    }
  } catch (error) {
    console.error(
      `Something went wrong while saving ${savedTask || savedTasks} => ${error}`
    );
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const getAllTasks = async (req, res, next) => {
  let allTasks;

  try {
    allTasks = await taskModelSchema.find();

    if (allTasks) {
      res.status(200).json(allTasks);
    } else {
      console.error(`Couldn't find ${allTasks} => ${error}`);
      error.type = `NOT_FOUND`;
      next(error);
    }
  } catch (error) {
    console.error(
      `Something went wrong while fetching tasks: ${allTasks} => ${error}`
    );
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const updateSpecificTaskById = async (req, res, next) => {
  const taskId = req.params.id;

  try {
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
    console.error(
      `Something went wrong file fetching ${updatedTask}: ${error}`
    );
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const deleteSpecificTaskById = async (req, res, next) => {
  const taskId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    console.error(`The provided Id ${taskId} wasn't found => ${error}`);
    error.type = `NOT_FOUND`;
    next(error);
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
      console.error(
        `Something went wrong while trying to delete the schema with Id ${isTaskExist} => ${error}`
      );
      error.type = `SERVER_ERROR`;
      next(error);
    }
  } else {
    console.error(
      `The Id provided isn't in the database ${taskId} => ${error}`
    );
    error.type = `NOT_FOUND`;
    next(error);
  }
};

export {
  getAllTasks,
  createNewTask,
  updateSpecificTaskById,
  deleteSpecificTaskById,
};