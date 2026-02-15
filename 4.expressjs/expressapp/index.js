import express from "express";

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log("Request received");
  console.log(`${req.method} ${req.url}`);
  next();
});

// constructing this in a simple server requires some conditions like req.method == "GET"
app.get("/", (req, res) => {
  res.status(200).send("Hello Express App");
});

app.post("/", (req, res) => {
  res.status(200).send("POST request received");
});

// Default match for all other routes
app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

/** Middleware (actions between request and response cycle) usages
 * 1. For hanndling default matches
 * 2. Before request handler gets starts
 * 3. Logging
 */
