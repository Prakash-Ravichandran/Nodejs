import path from "path";
import { fileURLToPath } from "url";

const filePath = "/users/logesh/projects/demo/app.js";

console.log("Base name:", path.basename(filePath)); // ➤ app.js
console.log("Dir name:", path.dirname(filePath)); // ➤ /users/logesh/projects/demo
console.log("Extension:", path.extname(filePath)); // ➤ .js

// Join paths safely
const __filename = fileURLToPath(import.meta.url); // converts input into platform-specific path
const joinedPath = path.join(path.dirname(__filename), "data", "output.txt"); // .join handles platform-specific separators
console.log("Joined Path:", joinedPath);

// Normalize a messy path
console.log("Normalized:", path.normalize("/users/../users//logesh/demo//"));
