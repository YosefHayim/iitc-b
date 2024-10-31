import express from "express";
import { productsProjectSchema } from "../modules/products-project-schema.js";

const router = express.Router();

const fetchProducts = async () => {
  try {
    const allJokes = await productsProjectSchema.find();
    return allJokes;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

// Fetch all products
router.get("/all", async (req, res) => {
  try {
    const data = await fetchProducts();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
});

// Create a new product
router.post("/create", async (req, res) => {
  // Shortcut to get all the body keys.
  const { productTitle, productDescription, productPrice, availableQuantity, productWarehouse, productSupplierName } = req.body;

  for (const [key, value] of Object.entries(req.body)) {
    if (!key || !value) {
      res.status(404).send(`Sorry but one of your keys or values are missing in the body request: `,req.body)
    }
  }

  try {
    const newProduct = new productsProjectSchema({
      productTitle,
      productDescription,
      productPrice,
      availableQuantity,
      productWarehouse,
      productSupplierName
    });
    const savedJoke = await newProduct.save();
    res.status(201).json(savedJoke);

  } catch (error) {
    res.status(500).json({ message: "Error creating new schema product", error });
  }
});

export default router;
