const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    plan: {
      type: String,
      enum: ["Standard", "Gold", "Platinum"],
      default: "Standard",
    },
    savedBusinesses: [{ type: Schema.Types.ObjectId, ref: "Business" }],
  },
  { timestamps: true }
);

module.exports.User = model("User", userSchema);
