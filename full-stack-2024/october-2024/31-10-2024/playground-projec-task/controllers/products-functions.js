import { isKeysValid } from "../middleware/check-body-keys-valid.js";
import { isFalsy } from "../middleware/is-falsy.js";
import { productsProjectSchema } from "../models/products-project-schema.js";

const getProductById = async (req, res, next) => {
  const productId = req.params.id;

  isFalsy(productId,next);

  try {
    const findProductById = await productsProjectSchema.findById(productId);

    isFalsy(findProductById,next);

    res.status(200).json({
      message: "Success Found your product!",
      dataFound: findProductById,
    });
  } catch (error) {
    next({ type: `The Id provided has not been found: ${productId}` });
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const data = await productsProjectSchema.find();
    res.status(200).json(data);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
};

const createNewProducts = async (req, res, next) => {
  const {
    productTitle,
    productDescription,
    productPrice,
    availableQuantity,
    productWarehouse,
    productSupplierName,
  } = req.body;

  isKeysValid(req.body,next);

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
};

const updateProductById = async (req, res, next) => {
  const productId = req.params.id;

  isFalsy(productId,next);

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

    isFalsy(updatedProduct,next);

    res.status(200).json(updatedProduct);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
};

const deleteProductById = async (req, res, next) => {
  const productId = req.params.id;

  isFalsy(productId,next);

  try {
    const deletedProduct = await productsProjectSchema.findByIdAndDelete(
      productId
    );

    isFalsy(deletedProduct,next);

    res
      .status(200)
      .json({ message: `Product with ID ${productId} deleted successfully` });
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
};

export {
  getProductById,
  getAllProducts,
  createNewProducts,
  updateProductById,
  deleteProductById,
};
