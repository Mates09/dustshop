import express from "express";
import dotenv from "dotenv";
/* import connectDB from "./config/db.js"; */

const dotenvConfig = dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
