import express from "express";
import authorModel from "../models/author-schema.js";

const router = express.Router();

router.get("", async (req, res, next) => {
  try {
    const getAllAuthors = await authorModel.find();

    res.status(200).json({
      message: "Success",
      booksData: getAllAuthors,
    });
  } catch (error) {
    console.error(`Could not get authors schemas: ${error}`);
    next(error);
  }
});

export default router;
