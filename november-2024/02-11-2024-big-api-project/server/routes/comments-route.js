import express from "express";
import {
  createNewComment,
  deleteSpecificCommentById,
  getAllComments,
  getCommentById,
  updateSpecificCommentById,
} from "../controllers/comments-controller.js";

const router = express.Router();

router.get("/comment/:id", getCommentById);

router.get("/comments", getAllComments);

router.post("/comment", createNewComment);

router.patch("/comments/:id", updateSpecificCommentById);

router.delete("/comments/:id", deleteSpecificCommentById);

export default router;
