import { productsProjectSchema } from "../models/products-project-schema.js";

const fetchProducts = async (req, res) => {
  try {
    const allProducts = await productsProjectSchema.find();
    if (!allProducts) {
      res
        .status(404)
        .send(`Our products data for some reason not found: ${allProducts}`);
    }
    res.status(200).send(`Success,${allProducts}`);
    return;
  } catch (error) {
    res
      .status(404)
      .send(`Something went wrong durning fetching the data: `, error);
    return;
  }
};

const createNewProduct = async (req, res) => {
  // Shortcut to get all the body keys.
  const {
    productTitle,
    productDescription,
    productPrice,
    availableQuantity,
    productWarehouse,
    productSupplierName,
  } = req.body;

  // If for each key and his own value it doesn't have a value.
  for (const [key, value] of Object.entries(req.body)) {
    if (!key || !value) {
      res
        .status(404)
        .send(
          `Sorry but one of your keys or values are missing in the body request: `,
          req.body
        );
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
    res
      .status(500)
      .json({ message: "Error creating new schema product", error });
  }
};

const updateProductById = async (req, res) => {
  const updateDescription = req.body.text;
  const productId = req.params.id;

  try {
    const updatedSchema = await productsProjectSchema.findByIdAndUpdate(
      productId,
      {
        productDescription: updateDescription,
      },
      { new: true }
    );

    res
      .status(201)
      .send(`Success, updated schema ID: ${productId}, ${updatedSchema}`);
  } catch (error) {
    res.status(400).send(`The Id: ${productId}, you provided isn't valid.`);
  }
};

const deleteProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const updatedSchema = await productsProjectSchema.findByIdAndDelete(
      productId
    );

    res
      .status(200)
      .send(
        `Success the ID ${productId}, Schema: ${updatedSchema} has been successfully deleted.`
      );
  } catch (error) {
    res
      .status(400)
      .send(
        `The Id: ${productId}, you provided isn't valid to delete the Schema.`
      );
  }
};

export {
  fetchProducts,
  createNewProduct,
  deleteProductById,
  updateProductById,
};
