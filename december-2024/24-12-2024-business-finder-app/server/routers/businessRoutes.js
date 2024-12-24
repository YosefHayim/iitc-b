const express = require("express");
const businessController = require("../controllers/businessController");

const router = express.Router();

router.get("/", businessController.getAllBusinesses);
router.get("/:id", businessController.getBusinessById);
router.post("/", businessController.createBusiness);
router.put("/:id", businessController.updateBusinessById);
router.delete("/:id", businessController.deleteBusinessById);

module.exports = router;
