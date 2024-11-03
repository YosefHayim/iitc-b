import express from "express";
import { productsProjectSchema } from "../models/products-project-schema.js";

const router = express.Router();

// Get product by Id
router.get("/:id", async (req, res) => {
  const productId = req.params.id;

  if (!productId) {
    next({ type: `The product ID you provided is unknown: ${productId}` });
    return;
  }

  try {
    const findProductById = await productsProjectSchema.findById(productId);

    if (findProductById) {
      res.status(200).json({
        message: "Success Found your product!",
        dataFound: findProductById,
      });
    } else {
      res.status(404).json({
        message: `Failed to find your product: ${productId}`,
      });
    }
  } catch (error) {
    next({ type: `The Id provided has not been found: ${productId}` });
  }
});

// Fetch all products
router.get("", async (req, res, next) => {
  try {
    const data = await productsProjectSchema.find();
    res.status(200).json(data);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
});

// Create a new product
router.post("", async (req, res, next) => {
  const {
    productTitle,
    productDescription,
    productPrice,
    availableQuantity,
    productWarehouse,
    productSupplierName,
  } = req.body;

  for (const [key, value] of Object.entries(req.body)) {
    if (!value) {
      return next({ type: "VALIDATION_ERROR" });
    }
  }

  try {
    const newProduct = new productsProjectSchema({
      productTitle,
      productDescription,
      productPrice,
      availableQuantity,
      productWarehouse,
      productSupplierName,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
});

// Update an existing product by ID
router.put("/:id", async (req, res, next) => {
  const productId = req.params.id;
  const {
    productTitle,
    productDescription,
    productPrice,
    availableQuantity,
    productWarehouse,
    productSupplierName,
  } = req.body;

  try {
    const updatedProduct = await productsProjectSchema.findByIdAndUpdate(
      productId,
      {
        productTitle,
        productDescription,
        productPrice,
        availableQuantity,
        productWarehouse,
        productSupplierName,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return next({ type: "NOT_FOUND" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
});

// Delete a product by ID
router.delete("/:id", async (req, res, next) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await productsProjectSchema.findByIdAndDelete(
      productId
    );

    if (!deletedProduct) {
      return next({ type: "NOT_FOUND" });
    }

    res
      .status(200)
      .json({ message: `Product with ID ${productId} deleted successfully` });
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
});

export default router;
