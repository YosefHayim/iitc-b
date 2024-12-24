const express = require("express");
const {
  getAllBusinesses,
  toggleBusiness,
  createBusiness,
  updateBusinessById,
  deleteBusinessById,
  getBusinessById,
  addReviewToBusiness,
} = require("../controllers/businessControllers");

const router = express.Router();

router.get("/", getAllBusinesses);
router.get("/:id", getBusinessById);
router.get("/:userId/:businessId", toggleBusiness);
router.post("/:userId/:businessId/review", addReviewToBusiness);
router.post("/", createBusiness);
router.put("/:id", updateBusinessById);
router.delete("/:id", deleteBusinessById);

module.exports = router;
