import { authors, books, reviews } from "./inject-data.js";
import bookModel from "../models/book-schema.js";
import authorModel from "../models/author-schema.js";
import reviewModel from "../models/review-schema.js";

const insertData = async () => {
  try {
    await authorModel.insertMany(authors);
    const authorDocuments = await authorModel.find();

    books.forEach((currentBook) => {
      const matchingAuthor = authorDocuments.find(
        (author) => author.name === currentBook.author
      );
      if (matchingAuthor) currentBook.author = matchingAuthor._id;
    });

    await bookModel.insertMany(books);
    const bookDocuments = await bookModel.find();

    reviews.forEach((currentReview) => {
      const matchingBook = bookDocuments.find(
        (book) => book.title === currentReview.bookName
      );
      if (matchingBook) {
        currentReview.bookId = matchingBook._id; 
        currentReview.bookName = matchingBook.title;
      }
    });

    await reviewModel.insertMany(reviews);

    console.log(`Data seeded successfully!`);
  } catch (error) {
    console.error(`Something didn't work: ${error}`);
  }
};

export { insertData };
