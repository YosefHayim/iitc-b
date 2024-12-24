const { business } = require("../models/businessModel");
const mongoose = require("mongoose");

// Get all businesses
exports.getAllBusinesses = async (req, res, next) => {
  try {
    const businesses = await business
      .find()
      .populate("owner subscribers reviews.userId");

    if (!businesses || businesses.length === 0) {
      const error = new Error("No businesses found.");
      error.statusCode = 404; // Not Found
      throw error;
    }

    res.status(200).json({
      status: "Success",
      total: businesses.length,
      response: businesses,
    });
  } catch (error) {
    const err = error.statusCode
      ? error
      : new Error("Failed to fetch businesses.");
    err.statusCode = error.statusCode || 500; // Internal Server Error
    next(err);
  }
};

// Get a specific business by ID
exports.getBusinessById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("Invalid business ID format.");
      error.statusCode = 400; // Bad Request
      throw error;
    }

    const findBusiness = await business
      .findById(id)
      .populate("owner subscribers reviews.userId");

    if (!findBusiness) {
      const error = new Error("Business not found.");
      error.statusCode = 404; // Not Found
      throw error;
    }

    res.status(200).json(findBusiness);
  } catch (error) {
    const err = error.statusCode
      ? error
      : new Error("Failed to get business by ID.");
    err.statusCode = error.statusCode || 500; // Internal Server Error
    next(err);
  }
};

// Create a new business
exports.createBusiness = async (req, res, next) => {
  try {
    const businessData = req.body;

    if (!businessData || !businessData.name || !businessData.owner) {
      const error = new Error("Missing required business fields.");
      error.statusCode = 400; // Bad Request
      throw error;
    }

    const newBusiness = await business.create(businessData);

    res
      .status(201)
      .json({ message: "Business created.", business: newBusiness });
  } catch (error) {
    const err = error.statusCode
      ? error
      : new Error("Failed to create business.");
    err.statusCode = error.statusCode || 500; // Internal Server Error
    next(err);
  }
};

// Update a business by ID
exports.updateBusinessById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("Invalid business ID format.");
      error.statusCode = 400; // Bad Request
      throw error;
    }

    const businessData = req.body;
    const updatedBusiness = await business
      .findByIdAndUpdate(id, businessData, {
        new: true,
        runValidators: true,
      })
      .populate("owner subscribers reviews.userId");

    if (!updatedBusiness) {
      const error = new Error("Business not found.");
      error.statusCode = 404; // Not Found
      throw error;
    }

    res
      .status(200)
      .json({ message: "Business updated.", business: updatedBusiness });
  } catch (error) {
    const err = error.statusCode
      ? error
      : new Error("Failed to update business.");
    err.statusCode = error.statusCode || 500; // Internal Server Error
    next(err);
  }
};

// Delete a business by ID
exports.deleteBusinessById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("Invalid business ID format.");
      error.statusCode = 400; // Bad Request
      throw error;
    }

    const deletedBusiness = await business.findByIdAndDelete(id);

    if (!deletedBusiness) {
      const error = new Error("Business not found.");
      error.statusCode = 404; // Not Found
      throw error;
    }

    res.status(200).json({ message: "Business deleted." });
  } catch (error) {
    const err = error.statusCode
      ? error
      : new Error("Failed to delete business.");
    err.statusCode = error.statusCode || 500; // Internal Server Error
    next(err);
  }
};
