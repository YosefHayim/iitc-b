import express from "express";
import {
  createNewProject,
  deleteSpecificProjectById,
  getAllProjects,
  updateSpecificProjectById,
} from "../controllers/projects-controller.js";

const router = express.Router();

router.get("/projects", getAllProjects);

router.post("/projects", createNewProject);

router.patch("/projects/:id", updateSpecificProjectById);

router.delete("/projects/:id", deleteSpecificProjectById);

export default router;