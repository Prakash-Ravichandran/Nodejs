import express from "express";
import "./db.js";
import usersRouter from "./routes/users.js";

const app = express();

app.use(express.json()); // let express know what type of data to expect

app.use("/api/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
