import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// testing auth
// import { OAuth2Client } from "google-auth-library";
// const client = new OAuth2Client(
//   "1065315695970-i9fhvuus3sgaq27t0v385pgn0376qeco.apps.googleusercontent.com"
// );

// testing auth

import userRoutes from "./routes/user.js";
import goalRoutes from "./routes/goal.js";
import User from "./models/user.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/users", userRoutes);
app.use("/goals", goalRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.connect(
  process.env.CONNECT_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Connected to db!");
  }
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
