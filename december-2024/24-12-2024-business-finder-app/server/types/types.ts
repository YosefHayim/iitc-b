import { Document, Schema, Types } from "mongoose";

export interface IReview extends Document {
  userId: Types.ObjectId;
  comment: string;
  createdAt: Date;
}

export interface IBusiness extends Document {
  name: string;
  description: string;
  category: string;
  owner: Types.ObjectId;
  subscribers: Types.ObjectId[];
  reviews: IReview[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  plan: "Standard" | "Gold" | "Platinum";
  savedBusinesses: Schema.Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Payload {
  name: string;
  email: string;
  plan?: string;
  savedBusiness: string[];
}

export type Up = string;
export type dbPw = string;

export type GuestEmail = string;
