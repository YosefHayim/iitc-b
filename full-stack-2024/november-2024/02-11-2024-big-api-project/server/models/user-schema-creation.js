import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  profileImg: {
    type: String,
  },
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
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["Admin", "Member"],
    default: "Member",
  },
  createdAt: {
    type: String,
    default: new Date().toLocaleDateString("en-US"),
  },
});

export const userModelSchema = mongoose.model("users-databases", userSchema);
