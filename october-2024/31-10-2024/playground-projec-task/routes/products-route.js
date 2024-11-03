import express from "express";
import {
  getProductById,
  getAllProducts,
  createNewProducts,
  updateProductById,
  deleteProductById,
} from "../controllers/products-functions.js";

const router = express.Router();

// Get product by Id
router.get("/:id", getProductById);

// Fetch all products
router.get("", getAllProducts);

// Create a new product
router.post("", createNewProducts);

// Update an existing product by ID
router.put("/:id", updateProductById);

// Delete a product by ID
router.delete("/:id", deleteProductById);

export default router;
