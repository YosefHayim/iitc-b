import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName:{
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true
  },
  birthDate : {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  email: {
    type: String,
    match: /.+\@.+\..+/
  },
  agreeToTerms: {
    type: Boolean,
    default: false
  }

});

export const userProjectSchema = mongoose.model("usersProject", userSchema);
