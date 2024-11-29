const mongoose = require("mongoose");

const userSchemaModel = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userSchema = mongoose.model("Users", userSchemaModel);

module.exports = userSchema;
