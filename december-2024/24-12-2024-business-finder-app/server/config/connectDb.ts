import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const uri: string = process.env.URI_DB as string; 

    if (!uri) {
      throw new Error("Database URI is not defined in environment variables.");
    }

    const connectionStable = await mongoose.connect(uri);

    if (connectionStable) {
      console.log(`Successfully connected to the database.`);
    }
  } catch (error) {
    console.error(`Error occurred during connecting to the database: `, error);
  }
};

export default connectDB;
