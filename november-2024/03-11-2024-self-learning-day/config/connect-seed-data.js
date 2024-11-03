import { authors, books } from "./seedData.js";
import bookModel from "../models/book-schema.js";
import authorModel from "../models/author-schema.js";

const insertData = async () => {
  try {
    await authorModel.insertMany(authors);
    const authorDocs = await authorModel.find();

    books.forEach((book) => {
      const author = authorDocs.find((a) => a.name === book.author);
      book.author = author._id;
    });

    await bookModel.insertMany(books);
    console.log(`Data seeded successfully!`);
  } catch (error) {
    console.error(`Something didn't work: ${error}`);
  }
};

export { insertData };
