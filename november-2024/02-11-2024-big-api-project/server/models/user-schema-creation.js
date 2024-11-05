import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
    minlength: [3, "First name must be at least 3 letters."],
  },
  lName: {
    type: String,
    required: true,
    minlength: [3, "Last name must be at least 3 letters."],
  },
  age: {
    type: Number,
    min: [1, "Age must be at least 1."],
  },
  birthDate: {
    type: Date,
    validate: {
      validator: function (value) {
        return value < new Date();
      },
      message: (props) =>
        `The birth date you provided: ${props.value} must be before the current date.`,
    },
  },
  location: {
    city: { type: String },
    state: { type: String },
    country: { type: String },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Please enter a valid email address.",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
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

export const userModelSchema = mongoose.model("users-databases", userSchema);
