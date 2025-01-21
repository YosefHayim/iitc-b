import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const uri = `${process.env.uri}`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection error:", error);
  }
};

export { connectDB };
