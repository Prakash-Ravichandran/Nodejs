import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";

const app = express();

/**
 * Middleware:
 * A request will travel all the way through the middleware stack
 */

// app.use((req, res, next) => {
//   console.log("Executing First Middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Executing Second Middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Executing Third Middleware");
//   //   res.send("Hello from Third Middleware");
//   res.send({ some: "JSON data" });
//   next();
// });

/** Handling different URL routes */

// app.use("/second", (req, res) => {
//   res.send("<h1>Hello from the second route</h1>");
// });

// app.use("/third", (req, res) => {
//   res.send("<h1>Hello from the third route</h1>");
// });

// app.use("/", (req, res) => {
//   res.send("<h1>Hello from the root route</h1>");
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });



/** Body Parser */
// app.use(bodyParser.urlencoded());

// app.get('/', (req, res) => {
//    res.send('<h2> Add a product using the form at <a href="/add-product">/add-product</a></h2>');
// });

// app.get("/add-product", (req, res) => {
//   res.send("<form action='/save-product' method='POST'> <input type='text' name='title' placeholder='Enter product name'/> <input type='submit' value='Save Product'/> </form>");
// });

// app.post("/save-product", (req, res) => {
//   console.log("Received product data:", req.body); // Received product data: { title: 'biscuit' }
//   res.send(`<h1>Product saved successfully - ${req.body.title}</h1>`);
// });

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });


/** Using Express Router */

app.use(adminRoutes);
app.use(shopRoutes);
app.use(bodyParser.urlencoded());

app.listen(3000, () => {
  console.log("Admin routes example server is running on http://localhost:3000");
});

/**
 * Characteristics of Middleware
 * 
 * Middleware functions provide a flexible way to add functionality to an Express server and can perform the following tasks: 

- Execute any code during the request lifecycle.
- Make changes to the request (req) and response (res) objects (e.g., adding user data to the request object after authentication).
- End the request-response cycle by sending a final response to the client.
- Call the next middleware function in the stack using the next() function. If a middleware does not end the cycle, it must call next() to pass control, or the request will be left hanging.
 */
