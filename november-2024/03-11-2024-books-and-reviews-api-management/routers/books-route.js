import express from "express";
import {
  getAllBooks,
  getBookById,
  getTotalBooksReviewsCount,
  createBook,
  partialUpdate,
} from "../controllers/books-controller.js";

const router = express.Router();

router.get("", getAllBooks);

router.get("/:id", getBookById);

router.get("/reviews/count/:id", getTotalBooksReviewsCount);

// router.get("/books", getBookPage);

router.post("", createBook);

router.patch("/:id", partialUpdate);

export default router;
