const axios = require('axios');
const express = require("express");

const app = express();
const port = 3000;

const baseURL = 'https://simple-grocery-store-api.glitch.me';

// CONNECT TO THE API
app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}`);
    res.json(response.data);
  } catch (err) {
    console.error("API Error", err);
    res.status(500).send("Server Error");
  }
});

// GET ALL PRODUCTS
app.get('/products', async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    res.json(response.data);
  } catch (err) {
    console.error("API Error", err);
    res.status(500).send("Server Error");
  }
});

// GET PRODUCTS BASED ON USER'S CATEGORY CHOICE
app.get('/products/:category', async (req, res) => {
  try {
    const userCategory = req.params.category.toLowerCase(); // Get category from URL and convert to lowercase
    const response = await axios.get(`${baseURL}/products`);

    // Filter products where the category name matches the user choice
    const userProducts = response.data.filter(product => 
      product.category && product.category.toLowerCase() === userCategory
    );

    if (userProducts.length === 0) {
      // If no products match the category, send a custom message
      res.status(404).send("The provided category is not found. Please try another product.");
    } else {
      // If products are found, send the filtered results as JSON
      res.json(userProducts);
    }
  } catch (err) {
    console.error("API Error", err);
    res.status(500).send("Server Error");
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
