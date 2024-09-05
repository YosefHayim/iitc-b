const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = 3000;
const baseUrl = `https://fakestoreapi.com`;

app.get("/products", async (req, res) => {
 try {
  // Forward the request to the existing API
  const response = await axios.get(`${baseUrl}/products`);
  res.json(response.data);
 } catch (error) {
  console.error("Error fetching products:", error.message);
  res
   .status(error.response ? error.response.status : 500)
   .json({ error: error.message || "Something went wrong" });
 }
});

app.get("/products/:id", async (req, res) => {
  const {id} = req.params
 try {
  // Forward the request to the existing API
  const response = await axios.get(`${baseUrl}/products/${id}`);
  if (!response.data) {
   return res.status(404).send (`id does not exist`)
  }
  res.json(response.data);
 } catch (error) {
  console.error("Error fetching products:", error.message);
  res
   .status(error.response ? error.response.status : 500)
   .json({ error: error.message || "Something went wrong" });
 }
});

app.post(`/api/products`, async (req, res) =>{
  try {
    // Extract data from the incoming request body
    const productData = {
      id: req.body.id,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image,
      rating: {
        rate: req.body.rate,
        count: req.body.count
      }
    };

    // Make a POST request to an external API using Axios
    const externalApiUrl = `${baseUrl}/api/products`; // Replace with your external API URL
    const response = await axios.post(externalApiUrl, productData);

    // Send success response to the client
    res.status(200).json({
      message: 'Product submitted successfully',
      externalApiResponse: response.data
    });
  } catch (error) {
    // Handle errors and send an error response
    res.status(500).json({
      message: 'Failed to submit product',
      error: error.message
    });
  }

})

app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;

