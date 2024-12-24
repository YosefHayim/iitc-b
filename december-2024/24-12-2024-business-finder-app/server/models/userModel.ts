import { Schema, model } from "mongoose";
import { IUser } from "../types/types";

const userSchema = new Schema<IUser>(
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

export const User = model<IUser>("User", userSchema);
