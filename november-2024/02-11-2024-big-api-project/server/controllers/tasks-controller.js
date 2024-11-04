import { taskModelSchema } from "../models/task-schema-creation.js";
import { isFalsy } from "../middleware/is-falsy.js";
import { isBodyEmpty } from "../middleware/check-body-not-empty.js";

const getTaskById = async (req, res, next) => {
  const taskId = req.params.id;

  isFalsy(taskId, next);

  try {
    const foundTask = await taskModelSchema.findById(taskId);

    isFalsy(foundTask, next);

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

    isFalsy(allTasks, next);

    res.status(200).json(allTasks);
  } catch (error) {
    console.error(`Something went wrong while fetching tasks => ${error}`);
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const createNewTask = async (req, res, next) => {
  let tasks = req.body;

  isBodyEmpty(tasks, next);

  try {
    if (!Array.isArray(tasks)) {
      const { title, description, status, project, user, dueDate } = tasks;

      const newTask = new taskModelSchema({
        title,
        description,
        status,
        project,
        user,
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

    isFalsy(savedTasks, next);

    res.status(201).json({
      message: "All tasks added successfully",
      data: savedTasks,
    });
  } catch (error) {
    console.error(`Something went wrong while saving => ${error}`);
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const updateSpecificTaskById = async (req, res, next) => {
  const taskId = req.params.id;

  try {
    const { title, description, status, project, user, dueDate } = req.body;

    isBodyEmpty(req.body);

    const updateFields = {};
    updateFields.title = title;
    updateFields.description = description;
    updateFields.status = status;
    updateFields.project = project
    updateFields.user = user
    updateFields.dueDate = dueDate;

    const updatedTask = await taskModelSchema.findByIdAndUpdate(
      taskId,
      { $set: updateFields },
      { new: true }
    );

    isFalsy(updatedTask, next);

    res.send(updatedTask);
  } catch (error) {
    console.error(`Something went wrong while updating task => ${error}`);
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const deleteSpecificTaskById = async (req, res, next) => {
  const taskId = req.params.id;

  isFalsy(taskId, next);

  const isTaskExist = await taskModelSchema.exists({ _id: taskId });

  isFalsy(isTaskExist, next);

  if (isTaskExist) {
    try {
      const deleted = await taskModelSchema.findByIdAndDelete(taskId);
      isFalsy(deleted, next);
      res.status(200).json({
        message: `Task ID: ${taskId} has been successfully deleted from the database.`,
      });
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
