import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import getAllUsers from "./src/getAllUsers.js";
import addUser from "./src/addUser.js";

const app = express();
const router = express.Router();

app.use(cors());

dotenv.config();
var jsonParser = bodyParser.json();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const saltRounds = 2;

app.get("/", (req, res) => getAllUsers(req, res));
app.post("/", jsonParser, (req, res) => addUser(req, res));

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log("Connection Failed due to ", error.message);
  });

app.listen(PORT || 3000, () => {
  console.log(`Listening to PORT ${PORT}`);
});
