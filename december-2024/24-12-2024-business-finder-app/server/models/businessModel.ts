import { Schema, model, Types } from "mongoose";
import { IBusiness } from "../types/types";

const businessSchema = new Schema<IBusiness>(
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

export const Business = model<IBusiness>("Business", businessSchema);
