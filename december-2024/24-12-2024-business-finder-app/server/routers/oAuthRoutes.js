const express = require("express");
const {
  getGoogleAuthUrl,
  googleCallBack,
} = require("../controllers/userControllers");
const router = express.Router();

// Define the route for Google Auth
router.get("/google", getGoogleAuthUrl);
router.post("/google/callback", googleCallBack);

module.exports = router;
