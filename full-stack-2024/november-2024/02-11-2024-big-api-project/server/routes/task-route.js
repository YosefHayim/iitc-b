import express from "express";
import {
  getAllTasks,
  createNewTask,
  updateSpecificTaskById,
  deleteSpecificTaskById,
  getTaskById,
} from "../controllers/tasks-controller.js";

const router = express.Router();

router.get("/task/:id", getTaskById);

router.get("/tasks", getAllTasks);

router.post("/tasks", createNewTask);

router.patch("/tasks/:id", updateSpecificTaskById);

router.delete("/tasks/:id", deleteSpecificTaskById);

export default router;
