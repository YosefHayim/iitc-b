import express from "express";
import {
  getAllTasks,
  createNewTask,
  updateSpecificTaskById,
  deleteSpecificTaskById,
} from "../controllers/tasks-controller.js";

const router = express.Router();

router.get("/tasks", getAllTasks);

router.post("/tasks", createNewTask);

router.patch("/tasks/:id", updateSpecificTaskById);

router.delete("/tasks/:id", deleteSpecificTaskById);

export default router;
