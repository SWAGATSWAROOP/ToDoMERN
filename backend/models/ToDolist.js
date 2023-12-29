import mongoose, { Schema } from "mongoose";
import { DB_NAME } from "../constant";

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const TodoModel = mongoose.model(`${DB_NAME}`, todoSchema);
