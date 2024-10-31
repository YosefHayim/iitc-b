import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import jokesRoute from "./routes/jokes-route.js";
import productsRoute from "./routes/products-route.js";

dotenv.config(); // Moved dotenv config to load env variables

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("tiny"));

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@iitc.tqkjc.mongodb.net/test-api?retryWrites=true&w=majority&appName=IITC`;

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

app.use("/api/jokes", jokesRoute);
app.use("/api/products", productsRoute);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
