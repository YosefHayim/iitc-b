const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;
const baseUrl = `https://fakestoreapi.com`;

// Middleware to parse JSON bodies
app.use(express.json());

// GET request to fetch all products
app.get("/products", async (req, res) => {
    try {
        const response = await axios.get(`${baseUrl}/products`);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching products:", error.message);
        res.status(error.response ? error.response.status : 500).json({ error: error.message });
    }
});

// GET request to fetch a product by ID
app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`${baseUrl}/products/${id}`);
        if (!response.data) {
            return res.status(404).send(`Product with id ${id} does not exist`);
        }
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching product:", error.message);
        res.status(error.response ? error.response.status : 500).json({ error: error.message });
    }
});

// POST request to submit a new product
app.post("/api/products", async (req, res) => {
    try {
        const productData = {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            image: req.body.image
        };

        // Post the product data to the external API
        const externalApiUrl = `${baseUrl}/products`;
        const response = await axios.post(externalApiUrl, productData);

        res.status(200).json({
            message: 'Product submitted successfully',
            externalApiResponse: response.data
        });
    } catch (error) {
        console.error("Error submitting product:", error.message);
        res.status(500).json({
            message: 'Failed to submit product',
            error: error.message
        });1
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
