import { model, Schema } from "mongoose";
import { IApple } from "./apple.interface";

const appleSchema = new Schema<IApple>(
  {
    name: { type: String, trim: true, required: true },
    variety: { type: String, trim: true, required: true },
    unit: { type: String, required: true, enum: ["KG", "TON"], default: "KG" },
    price: { type: Number, min: 0 },
    stock: { type: Number, min: 0 },
    origin: { type: String },
    season: {
      type: String,
      enum: ["Summer", "Winter", "Everytime"],
      default: "Everytime",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Apple = model<IApple>("Apple", appleSchema);
