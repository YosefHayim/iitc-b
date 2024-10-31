import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import jokesRoute from "./routes/jokes-route.js";

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(morgan("tiny"));

const uri =
  "mongodb+srv://yosefisabag:mkkbjGhwP4ex1XgC@iitc.tqkjc.mongodb.net/test-api?retryWrites=true&w=majority&appName=IITC";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected");
  } catch (error) {
    console.error("Connection error", error);
  }
};

connectDB();

app.use("/api/jokes", jokesRoute);

// Listen to anything happens on the server.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
