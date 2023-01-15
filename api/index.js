require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Models and controllers import
const User = require("./src/models/userModel");
const userController = require("./src/controllers/userController");

const gamesController = require("./src/controllers/gameController");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

// CORS config
const cors = require("cors");
app.use(cors());

mongoose.set("strictQuery", true);
mongoose.connect(MONGO_URL);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());

// API paths
app.use("/api/user", userController);

app.use("/api/games", gamesController);

app.listen(PORT, () => {
  console.log(`Listening to Port ${PORT}`);
});
