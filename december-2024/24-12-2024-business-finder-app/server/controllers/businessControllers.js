const { business } = require("../models/businessModel");

// Get all businesses
exports.getAllBusinesses = async (req, res, next) => {
  try {
    const businesses = await business
      .find()
      .populate("owner subscribers reviews.userId");
    res.status(200).json({
      status: "Success",
      total: businesses.length,
      response: businesses,
    });
  } catch (error) {
    next(error);
  }
};

// Get a specific business by ID
exports.getBusinessById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findBusiness = await business
      .findById(id)
      .populate("owner subscribers reviews.userId");

    if (!findBusiness) {
      return res.status(404).json({ message: "Business not found." });
    }
    res.status(200).json(findBusiness);
  } catch (error) {
    next(error);
  }
};

// Create a new business
exports.createBusiness = async (req, res, next) => {
  try {
    const businessData = req.body;
    const newBusiness = await business.create(businessData);
    res
      .status(201)
      .json({ message: "Business created.", business: newBusiness });
  } catch (error) {
    next(error);
  }
};

// Update a business by ID
exports.updateBusinessById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const businessData = req.body;
    const updatedBusiness = await business
      .findByIdAndUpdate(id, businessData, {
        new: true,
        runValidators: true,
      })
      .populate("owner subscribers reviews.userId");
    if (!updatedBusiness) {
      return res.status(404).json({ message: "Business not found." });
    }
    res
      .status(200)
      .json({ message: "Business updated.", business: updatedBusiness });
  } catch (error) {
    next(error);
  }
};

// Delete a business by ID
exports.deleteBusinessById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBusiness = await business.findByIdAndDelete(id);
    if (!deletedBusiness) {
      return res.status(404).json({ message: "Business not found." });
    }
    res.status(200).json({ message: "Business deleted." });
  } catch (error) {
    next(error);
  }
};
