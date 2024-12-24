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
    role: {
      enum: ["user", "businessOwner", "guest"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("find", function (next) {
  this.sort({ createdAt: -1 });
  next();
});

module.exports.User = model("User", userSchema);
