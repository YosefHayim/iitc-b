import mongoose from "mongoose";
import dotenvFlow from "dotenv-flow";
import { injectData } from "./create-fake-data.js";
import { userModelSchema } from "../models/user-schema-creation.js";

dotenvFlow.config();

const uri = `${process.env.uri}`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    const usersCounts = await userModelSchema.countDocuments();
    if (usersCounts === 0) {
      injectData();
      console.log(`Data has been injected.`);
    } else {
      console.log(`No data has been appended.`);
    }

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection error:", error);
  }
};

export { connectDB };
