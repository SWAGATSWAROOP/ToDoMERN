import Dotenv from "dotenv";
Dotenv.config({ path: "./env" });
import connectionDb from "./db/index.js";
import express, { urlencoded } from "express";

export const app = express();

connectionDb()
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log("Error");
  });

app.use(urlencoded());

app.get("/", (req, res) => {
  res.send(`working on port ${process.env.PORT}`);
});

app.get("/api/data", (req, res) => {
  res.send("this is working");
  res.redirect();
});
