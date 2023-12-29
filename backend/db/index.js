import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import { app } from "../index.js";

const connectionDb = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
    console.log("Sucessfully Connected to DB");
    app.on("error", () => console.log("Error in express server", error));
  } catch (error) {
    console.log("Error in connecting to database", error);
    process.exit(1);
  }
};

export default connectionDb;
