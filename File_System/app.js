import fs from "fs";

fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});

console.log("Started Reading the File: Example.txt");
