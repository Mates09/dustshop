import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import connectDB from "./DB/db.js";

const dotenvConfig = dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log("Server is running on port " + port);
  connectDB();
});
