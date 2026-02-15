import express from "express";

const app = express();

app.use(express.json()); // let express know what type of data to expect

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/users", (req, res) => {
  const data = req.body;
  console.log(data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
