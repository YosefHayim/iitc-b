import mongoose from "mongoose";
import dotenvFlow from "dotenv-flow";
import { insertData } from "./connect-seed-data.js";

dotenvFlow.config();

const uri = `${process.env.uri}`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // Preform the matching between books and there authors.
    insertData();

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection error:", error);
  }
};

export { connectDB };
