import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  birthDate: {
    type: Date,
  },
  location: {
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Member"],
    default: "Member",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const userModelSchema = mongoose.model("users-database", userSchema);
