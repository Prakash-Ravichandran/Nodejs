import fs from "fs";

fs.writeFileSync("./sync-example.txt", "Node JS - Sync File Writing Demo");

const data = fs.readFileSync("./sync-example.txt", "utf-8");
console.log("Reading File contents synchronously:", data);
