require("dotenv").config();
const express = require("express");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/api/data", (req, res) => {
  const data = { message: "This is your API data!" };
  res.json(data); // Sending JSON response with data
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
