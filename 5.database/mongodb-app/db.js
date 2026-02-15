// import mongoose from "mongoose";
const mongoose = require("mongoose");

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected successfully.");
});
mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/mongodbapp")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));
