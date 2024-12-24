const { business } = require("../models/businessModel");
const mongoose = require("mongoose");
const { User } = require("../models/userModel");

// Get all businesses
getAllBusinesses = async (req, res, next) => {
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
getBusinessById = async (req, res, next) => {
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
createBusiness = async (req, res, next) => {
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
updateBusinessById = async (req, res, next) => {
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
deleteBusinessById = async (req, res, next) => {
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

// Add or toggle a business in the user's favorite list
toggleBusiness = async (req, res, next) => {
  const { userId, businessId } = req.params;

  try {
    if (
      !mongoose.Types.ObjectId.isValid(userId) ||
      !mongoose.Types.ObjectId.isValid(businessId)
    ) {
      const error = new Error("Invalid User ID or Business ID format.");
      error.statusCode = 400; // Bad Request
      throw error;
    }

    const user = await User.findById(userId);
    if (!user) {
      const error = new Error("User not found.");
      error.statusCode = 404; // Not Found
      throw error;
    }

    const isFavorite = user.savedBusinesses.includes(businessId);

    if (isFavorite) {
      user.savedBusinesses = user.savedBusinesses.filter(
        (savedBusinessId) => savedBusinessId.toString() !== businessId
      );
    } else {
      user.savedBusinesses.push(businessId);
    }

    await user.save();

    res.status(200).json({
      result: isFavorite
        ? "Business removed from favorites."
        : "Business added to favorites.",
      savedBusinesses: user.savedBusinesses,
    });
  } catch (error) {
    const err = error.statusCode
      ? error
      : new Error("Failed to toggle favorite business.");
    err.statusCode = error.statusCode || 500; // Internal Server Error
    next(err);
  }
};

addReviewToBusiness = async (req, res, next) => {
  try {
    const { userId, businessId } = req.params;
    const { comment } = req.body;

    // Validate input
    if (
      !mongoose.Types.ObjectId.isValid(userId) ||
      !mongoose.Types.ObjectId.isValid(businessId)
    ) {
      const error = new Error("Invalid User ID or Business ID format.");
      error.statusCode = 400; // Bad Request
      throw error;
    }

    if (!comment || typeof comment !== "string") {
      const error = new Error(
        "Review comment is required and must be a string."
      );
      error.statusCode = 400; // Bad Request
      throw error;
    }

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      const error = new Error("User not found.");
      error.statusCode = 404; // Not Found
      throw error;
    }

    // Find the business to update
    const existingBusiness = await business.findById(businessId);
    if (!existingBusiness) {
      const error = new Error("Business not found.");
      error.statusCode = 404; // Not Found
      throw error;
    }

    // Add the review to the business
    const review = {
      userId,
      comment,
      createdAt: new Date(),
    };
    existingBusiness.reviews.push(review);

    // Save the updated business
    await existingBusiness.save();

    res.status(200).json({
      message: "Review added successfully.",
      business: existingBusiness,
    });
  } catch (error) {
    const err = error.statusCode
      ? error
      : new Error("Failed to add review to business.");
    err.statusCode = error.statusCode || 500; // Internal Server Error
    next(err);
  }
};

module.exports = {
  getAllBusinesses,
  getBusinessById,
  createBusiness,
  updateBusinessById,
  deleteBusinessById,
  toggleBusiness,
  addReviewToBusiness,
};
