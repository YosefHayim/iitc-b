import bookModel from "../models/book-schema.js";

const getAllBooks = async (req, res, next) => {
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
};

const getBookById = async (req, res, next) => {
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
};

const getTotalBooksReviewsCount = async (req, res, next) => {
  const bookId = req.params.id;

  try {
    const getBookReviewById = await bookModel
      .findById(bookId)
      .populate("reviewCount");

    res.status(200).json({
      message: "Success",
      bookReview: getBookReviewById.reviewCount,
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving review" });
    next(error);
  }
};

const createBook = async (req, res, next) => {
  const { title, author, publishedDate, genre, averageRating } = req.body;

  try {
    const createdBook = new bookModel({
      title,
      author,
      publishedDate,
      genre,
      averageRating,
    });

    await createdBook.save();

    res.status(201).json({
      message: "Success",
      // Avoid from automatically applying the virtual method. 
      bookCreated: createdBook.toJSON({ virtuals: false }),
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error creating a new book in database.",
        error: error.message,
      });
    next(error);
  }
};

export { getAllBooks, getBookById, getTotalBooksReviewsCount, createBook };
