import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import express from "express";

const app = express();
console.log("this is ", process.env.DB_URI);
const connectionDb = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
    console.log("Sucessfully Connected to DB");
    app.on("error", (error) => {
      console.log("Error in express :", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error in connecting to database", error);
    process.exit(1);
  }
};

export default connectionDb;
