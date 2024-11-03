import express from "express";
import {
  getAllBooks,
  getBookById,
  getTotalBooksReviewsCount,
  createBook,
} from "../controllers/books-controller.js";

const router = express.Router();

router.get("", getAllBooks);

router.get("/:id", getBookById);

router.get("/reviews/count/:id", getTotalBooksReviewsCount);

router.post("", createBook);

export default router;
