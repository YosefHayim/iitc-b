import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  plan: "Standard" | "Gold" | "Platinum";
  savedBusinesses: Schema.Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

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
