import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
   res.send('<h2>Admin route: Add a product using the form at <a href="/add-product">/add-product</a></h2>');
});

router.get("/add-product", (req, res) => {
  res.send("<form action='/save-product' method='POST'> <input type='text' name='title' placeholder='Enter product name'/> <input type='submit' value='Save Product'/> </form>");
});

router.post("/save-product", (req, res) => {
  console.log("Received product data:", req.body); // Received product data: { title: 'biscuit' }
  res.send(`<h1>Product saved successfully - ${req.body.title}</h1>`);
});

export default router;