const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minlength: [5, "First name must be at least 5 characters"],
      maxlength: [10, "First name can't be more than 10 characters"],
    },
    profileImg: {
      type: String,
      default: "../public/profile-user-default.svg",
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
