import { authors, books, reviews } from "./inject-data.js";
import bookModel from "../models/book-schema.js";
import authorModel from "../models/author-schema.js";
import reviewModel from "../models/review-schema.js";

const insertData = async () => {
  try {
    await authorModel.insertMany(authors);
    const authorDocs = await authorModel.find();

    books.forEach((book) => {
      const author = authorDocs.find((a) => a.name === book.author);
      if (author) book.author = author._id;
    });

    await bookModel.insertMany(books);
    const bookDocs = await bookModel.find();

    reviews.forEach((review) => {
      const book = bookDocs.find((b) => b.title === review.bookName);
      if (book) review.book = book._id;
    });

    await reviewModel.insertMany(reviews);

    console.log(`Data seeded successfully!`);
  } catch (error) {
    console.error(`Something didn't work: ${error}`);
  }
};

export { insertData };
