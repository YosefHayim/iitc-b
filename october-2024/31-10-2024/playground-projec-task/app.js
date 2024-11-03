import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import { logRequest } from "./middleware/logger.js";
import jokesRoute from "./routes/jokes-route.js";
import productsRoute from "./routes/products-route.js";
import usersRoute from "./routes/users-route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("tiny"));
app.use(logRequest);

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@iitc.tqkjc.mongodb.net/31-10-2024-playground-project-task?retryWrites=true&w=majority&appName=IITC`;

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

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the server.");
});

app.use("/api/jokes", jokesRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);
app.use("*", (req, res) => {
  res.status(404).json({ message: "This is nota valid server path." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
