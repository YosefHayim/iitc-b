import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import { logRequest } from "./middleware/logger.js";
import usersRoute from "./routes/user-route.js";
import projectsRoute from "./routes/project-route.js";
import tasksRoute from "./routes/task-route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logRequest);
app.use(express.json());
app.use(morgan("tiny"));

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@iitc.tqkjc.mongodb.net/api-project-01-11-2024?retryWrites=true&w=majority&appName=IITC`;

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

app.use("/api/users", usersRoute);
app.use("/api/projects", projectsRoute);
app.use("/api/tasks", tasksRoute);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Simple Project Management API.");
});

app.listen(`${PORT}`, () => {
  console.log(`Server is running on port ${PORT}`);
});
