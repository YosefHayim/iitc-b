import express from "express"
import { MongoClient, ServerApiVersion } from "mongodb"
import mongoose from "mongoose"

const app = express()
const PORT = process.env.port || 3000;
const uri = "mongodb+srv://yosefisabag:mkkbjGhwP4ex1XgC@iitc.tqkjc.mongodb.net/?retryWrites=true&w=majority&appName=IITC";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected');
  } catch (error) {
    console.error('Connection error', error);
  }
};

connectDB();

// Listen to anything happens on the server.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});