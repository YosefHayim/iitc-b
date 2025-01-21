import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: [3, "first name must be more than 3 letters."],
    },
    description: {
      type: String,
      required: true,
      min: [3, "Description must contain more than 3 letters."],
    },
    status: {
      type: String,
      enum: ["Not Started", "In Progress", "Completed"],
      default: "Not Started",
    },
    createdAt: {
      type: String,
      default: new Date().toLocaleDateString("en-US"),
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users-databases",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  { timestamps: true }
);

projectSchema.virtual("userSchema", {
  ref: "users-databases",
  localField: "user",
  foreignField: "_id",
  justOne: true,
});

export const projectModelSchema = mongoose.model(
  "projects-databases",
  projectSchema
);
