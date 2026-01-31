import fs from "fs";
import path from "path";

/* 
Write and Read File Contents - Async
*/
const asyncFile = path.join(".", "text-files", "async-example.txt");

fs.writeFile(
  "./text-files/async-example.txt",
  "Node JS - Async File Writing Demo - updated",
  (err) => {
    if (err) throw err;
    console.log("File Written Completed");
  },

  fs.readFile("./text-files/async-example.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("File contents:", data);
  }),
);

console.log("File Writing Processing");

/* 
Read File Contents - Async
*/

fs.readFile("./text-files/example.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});

console.log("Started Reading the File: Example.txt");
