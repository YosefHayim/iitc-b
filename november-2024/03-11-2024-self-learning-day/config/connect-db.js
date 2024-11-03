import mongoose from "mongoose";
import dotenvFlow from "dotenv-flow";

dotenvFlow.config();

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
