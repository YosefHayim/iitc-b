import { taskModelSchema } from "../models/task-schema-creation.js";
import { isFalsy } from "../utils/is-falsy.js";

const getTaskById = async (req, res) => {
  const taskId = req.params.id;

  isFalsy(taskId);

  try {
    const foundTask = await taskModelSchema.findById(taskId);

    isFalsy(foundTask);

    res.status(200).json({
      message: "Success",
      response: foundTask,
    });
  } catch (error) {
    console.error(`Failed to find the task ID: ${taskId} ,error: ${error}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to find the task ID :${taskId} ,error: ${error}`,
    });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await taskModelSchema.find();

    isFalsy(allTasks);

    res.status(200).json({
      message: "Success",
      response: allTasks,
    });
  } catch (error) {
    console.error(`Failed to find all tasks, error ${error}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to find all tasks, error ${error}`,
    });
  }
};

const createNewTask = async (req, res) => {
  let tasks = req.body;

  try {
    const savedTasks = await taskModelSchema.insertMany(tasks);

    res.status(201).json({
      message: "Success",
      data: savedTasks,
    });
  } catch (error) {
    console.error(`Failed to create a task/s. , error ${error}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to create a task/s. , error ${error}`,
    });
  }
};

const updateSpecificTaskById = async (req, res) => {
  const taskId = req.params.id;

  try {
    const { title, description, status, project, user, dueDate } = req.body;

    const updateFields = {};
    updateFields.title = title;
    updateFields.description = description;
    updateFields.status = status;
    updateFields.project = project;
    updateFields.user = user;
    updateFields.dueDate = dueDate;

    const updatedTask = await taskModelSchema.findByIdAndUpdate(
      taskId,
      { $set: updateFields },
      { new: true }
    );

    isFalsy(updatedTask);

    res.status(201).json({
      message: "Success",
      response: updatedTask,
    });
  } catch (error) {
    console.error(`Failed to update the task ID: ${taskId} ,error: ${error}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to update task ID: ${taskId} ,error: ${error}`,
    });
  }
};

const deleteSpecificTaskById = async (req, res) => {
  const taskId = req.params.id;

  isFalsy(taskId);

  try {
    const deleted = await taskModelSchema.findByIdAndDelete(taskId);

    isFalsy(deleted);

    res.status(201).json({
      message: `Success`,
      response: deleted,
    });
  } catch (error) {
    console.error(`Failed to delete the task: ${taskId} ,error: ${error}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to delete the task: ${taskId} ,error: ${error}`,
    });
  }
};

export {
  getAllTasks,
  createNewTask,
  updateSpecificTaskById,
  deleteSpecificTaskById,
  getTaskById,
};
