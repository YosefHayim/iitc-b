import express from "express";
import bookModel from "../models/book-schema.js";

const router = express.Router();

router.get("", async (req, res, next) => {
  try {
    const getAllBooks = await bookModel.find();

    res.status(200).json({
      message: "Success",
      booksData: getAllBooks,
    });
  } catch (error) {
    console.error(`Could not get books schemas: ${error}`);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const bookId = req.params.id;

  try {
    const getBookById = await bookModel.findById(bookId).populate("author");

    if (!getBookById) {
      return res.status(404).json({
        status: "Failed",
        message: `Can't find book with ID ${bookId} on this server!`,
      });
    }

    res.status(200).json({
      message: "Success",
      bookAuthorFullName: getBookById.fullTitle,
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving book" });
    next(error);
  }
});

export default router;
