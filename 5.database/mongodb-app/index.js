import express from "express";
import "./db.js";
import User from "./models/user.js";

const app = express();

app.use(express.json()); // let express know what type of data to expect

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/users", async (req, res) => {
  const data = req.body;
  console.log(data);

  const user = new User(data);
  const saved = await user.save();
  res.status(201).json(saved);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
