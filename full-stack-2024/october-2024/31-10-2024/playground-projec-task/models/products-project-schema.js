import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productTitle: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  availableQuantity: {
    type: String,
  },
  productWarehouse: {
    type: String,
  },
  productSupplierName: {
    type: String,
  }

});

export const productsProjectSchema = mongoose.model("productsSchema", productSchema);
