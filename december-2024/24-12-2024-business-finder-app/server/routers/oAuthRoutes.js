const express = require("express");
const { getGoogleAuthUrl } = require("../utils/googleOAuth");
const router = express.Router();

// Define the route for Google Auth
router.get("/google", getGoogleAuthUrl);

module.exports = router;
