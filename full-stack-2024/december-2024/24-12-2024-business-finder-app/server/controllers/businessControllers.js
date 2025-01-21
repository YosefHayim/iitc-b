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
      : new Erro("Failed to fetch businesses.");
    err.statusCode = error.statusCode || 500; // Internal Server Error
    next(err);
  }
};

getBusinessById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid business ID format." });
    }

    const findBusiness = await business
      .findById(id)
      .populate("owner subscribers reviews.userId");

    if (!findBusiness) {
      return res.status(404).json({ error: "Business not found." });
    }

    res.status(200).json({ success: true, response: findBusiness });
  } catch (error) {
    next({ statusCode: 500, message: "Failed to get business by ID." });
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
    console.log(userId, businessId, comment);

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

const deleteReviewFromBusiness = async (req, res, next) => {
  try {
    const { userId, businessId, reviewId } = req.params;

    console.log("Received Params:", { userId, businessId, reviewId });

    if (
      !mongoose.Types.ObjectId.isValid(userId) ||
      !mongoose.Types.ObjectId.isValid(businessId) ||
      !mongoose.Types.ObjectId.isValid(reviewId)
    ) {
      return res.status(400).json({ message: "Invalid IDs." });
    }

    const isBusinessPostFound = await business.findById(businessId);
    if (!isBusinessPostFound)
      return res.status(404).json({ message: "Business not found." });

    const reviewIndex = isBusinessPostFound.reviews.findIndex(
      (review) => review._id.toString() === reviewId
    );
    if (reviewIndex === -1) {
      return res.status(404).json({ message: "Review not found." });
    }

    isBusinessPostFound.reviews.splice(reviewIndex, 1);
    await isBusinessPostFound.save();

    return res
      .status(200)
      .json({ message: "Review deleted successfully.", isBusinessPostFound });
  } catch (error) {
    console.error("Error deleting review:", error);
    return res.status(500).json({ message: "Internal Server Error." });
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
  deleteReviewFromBusiness,
};
