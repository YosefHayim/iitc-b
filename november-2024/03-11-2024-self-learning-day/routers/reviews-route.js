import express from "express";
import reviewModel from "../models/review-schema.js";

const router = express.Router();

router.get("", async (req, res, next) => {
  try {
    const getAllReviews = await reviewModel.find();

    res.status(200).json({
      message: "Success",
      reviewsData: getAllReviews,
    });
  } catch (error) {
    console.error(`Could not get books schemas: ${error}`);
    next(error);
  }
});

router.get("/last-review", async (req, res, next) => {
  try {
    const latestReview = await reviewModel.findOne().sort({ _id: -1 });
    res.status(200).json({
      message: "Success",
      latestReview: latestReview,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching the latest review" });
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { rating, comment, book, bookName } = req.body;

  try {
    const postedReview = await new reviewModel({
      rating,
      comment,
      book,
      bookName,
    }).save();

    res.status(200).json({
      message: "Success",
      dataInserted: postedReview,
    });
  } catch (error) {
    console.error(`could not create a post schema: ${error}`);
    next(error);
  }
});

export default router;
