import express from "express";
import {
  getAllComments,
  getCommentById,
  createNewComment,
  updateSpecificCommentById,
  deleteSpecificCommentById,
} from "../controllers/projects-controller.js";

const router = express.Router();

router.get("/comment/:id", getCommentById);

router.get("/comments", getAllComments);

router.post("/comment", createNewComment);

router.patch("/comments/:id", updateSpecificCommentById);

router.delete("/comments/:id", deleteSpecificCommentById);

export default router;
