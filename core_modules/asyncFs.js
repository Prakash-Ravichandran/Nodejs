import fs from "fs";

fs.writeFile(
  "async-example.txt",
  "Node JS - Async File Writing Demo",
  (err) => {
    if (err) throw err;
    console.log("File Written Completed");
  },

  fs.readFile("async-example.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("File contents:", data);
  }),
);

console.log("File Writing Processing");
