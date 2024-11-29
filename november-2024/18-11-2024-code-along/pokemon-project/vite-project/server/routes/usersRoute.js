const isFalsy = require("../utils/isFalsy.js");
const express = require("express");
const userSchema = require("../models/userSchema.js");

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const allUsers = await userSchema.find();

    isFalsy(allUsers);

    if (isFalsy(allUsers)) {
      return res.status(404).json({ message: "No users found." });
    }

    res.status(200).json({
      message: "Success",
      response: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve users.",
      error: error.message,
    });
    console.error("Error retrieving users:", error);
  }
});

export default router;
