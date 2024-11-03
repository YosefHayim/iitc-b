import { taskModelSchema } from "../models/task-schema-creation.js";
import mongoose from "mongoose";
import { isFalsy } from "../middleware/is-falsy.js";
import { isBodyEmpty } from "../middleware/check-body-not-empty.js";

const getTaskById = async (req, res, next) => {
  const taskId = req.params.id;

  isFalsy(taskId);

  try {
    const foundTask = await taskModelSchema.findById(taskId);
    res.status(200).json({
      message: "Success found your task Id",
      dataFound: foundTask,
    });
  } catch (error) {
    console.error(`Database doesn't have the task ID ${taskId}.`);
    error.type = `NOT_FOUND`;
    next(error);
  }
};

const getAllTasks = async (req, res, next) => {
  try {
    const allTasks = await taskModelSchema.find();

    if (allTasks) {
      res.status(200).json(allTasks);
    } else {
      throw new Error(`NOT_FOUND`);
    }
  } catch (error) {
    console.error(`Something went wrong while fetching tasks => ${error}`);
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const createNewTask = async (req, res, next) => {
  let tasks = req.body;

  isBodyEmpty(tasks);

  try {
    if (!Array.isArray(tasks)) {
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

    const tasksDocs = tasks.map((task) => {
      const { title, description, status, dueDate } = task;
      return { title, description, status, dueDate };
    });

    const savedTasks = await taskModelSchema.insertMany(tasksDocs);

    if (savedTasks) {
      res.status(201).json({
        message: "All tasks added successfully",
        data: savedTasks,
      });
    } else {
      throw new Error(`NOT_ACCEPTABLE`);
    }
  } catch (error) {
    console.error(`Something went wrong while saving => ${error}`);
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const updateSpecificTaskById = async (req, res, next) => {
  const taskId = req.params.id;

  try {
    const { title, description, status, dueDate } = req.body;

    const updateFields = {};
    if (title) updateFields.title = title;
    if (description) updateFields.description = description;
    if (status) updateFields.status = status;
    if (dueDate) updateFields.dueDate = dueDate;

    const updatedTask = await taskModelSchema.findByIdAndUpdate(
      taskId,
      { $set: updateFields },
      { new: true }
    );

    res.send(updatedTask);
  } catch (error) {
    console.error(`Something went wrong while updating task => ${error}`);
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const deleteSpecificTaskById = async (req, res, next) => {
  const taskId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    const error = new Error(`Invalid Task ID`);
    error.type = `NOT_FOUND`;
    return next(error);
  }

  const isTaskExist = await taskModelSchema.exists({ _id: taskId });

  if (isTaskExist) {
    try {
      const deleted = await taskModelSchema.findByIdAndDelete(taskId);
      if (deleted) {
        return res.status(200).json({
          message: `Task ID: ${taskId} has been successfully deleted from the database.`,
        });
      }
    } catch (error) {
      console.error(`Error deleting task ID ${taskId} => ${error}`);
      error.type = `SERVER_ERROR`;
      next(error);
    }
  } else {
    throw new Error(`NOT_FOUND`);
  }
};

export {
  getAllTasks,
  createNewTask,
  updateSpecificTaskById,
  deleteSpecificTaskById,
  getTaskById,
};
