import express from "express";
import {
  createNewProduct,
  deleteProductById,
  fetchProducts,
  updateProductById,
} from "../controller/products-controller.js";

const router = express.Router();

// Fetch all products
router.get("/all", fetchProducts);

// Create a new product
router.post("/create", createNewProduct);

// update product description by ID
router.patch("/update/:id", updateProductById);

// delete product by ID
router.delete("/delete/:id", deleteProductById);

export default router;
