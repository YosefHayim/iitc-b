const express = require("express");
const {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
  validateUser,
  contactUsEmail,
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);

router.post("/register", createUser);
router.post("/login", validateUser);
router.post("/send-email", contactUsEmail);

router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

module.exports = router;