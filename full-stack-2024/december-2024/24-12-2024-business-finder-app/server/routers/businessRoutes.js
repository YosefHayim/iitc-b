const express = require("express");
const {
  getAllBusinesses,
  toggleBusiness,
  createBusiness,
  updateBusinessById,
  deleteBusinessById,
  getBusinessById,
  addReviewToBusiness,
  deleteReviewFromBusiness,
} = require("../controllers/businessControllers");

const router = express.Router();

router.get("/", getAllBusinesses);
router.get("/:id", getBusinessById);

router.put("/:userId/:businessId", toggleBusiness);
router.put("/:id", updateBusinessById);

router.post("/:userId/:businessId", addReviewToBusiness);
router.post("/", createBusiness);

router.delete("/:id", deleteBusinessById);
router.delete("/:userId/:businessId/:reviewId", deleteReviewFromBusiness);

module.exports = router;
