import express from "express";

const app = express();

// constructing this in a simple server requires some conditions like req.method == "GET"
app.get("/", (req, res) => {
  res.status(200).send("Hello Express App");
});

app.post("/", (req, res) => {
  res.status(200).send("POST request received");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
