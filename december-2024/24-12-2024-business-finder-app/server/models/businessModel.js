const { Schema, model, Types } = require("mongoose");

const businessSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    owner: { type: Types.ObjectId, ref: "User", required: true },
    subscribers: [{ type: Types.ObjectId, ref: "User" }],
    reviews: [
      {
        userId: { type: Types.ObjectId, ref: "User", required: true },
        comment: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

businessSchema.pre("find", function (next) {
  this.sort({ createdAt: -1 });
  next();
});

module.exports.business = model("Business", businessSchema);
