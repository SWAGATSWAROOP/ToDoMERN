import Dotenv from "dotenv";
Dotenv.config({ path: "./env" });
import { DB_NAME } from "./constant.js";
import mongoose from "mongoose";
import connectionDb from "./db/index.js";

connectionDb();
