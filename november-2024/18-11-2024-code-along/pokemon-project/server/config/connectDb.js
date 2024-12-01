const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_LINK);
    console.log("Successfully logged in to the Pokémon database");
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
};

module.exports = connectDb;
