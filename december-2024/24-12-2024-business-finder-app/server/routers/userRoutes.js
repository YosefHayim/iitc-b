const express = require("express");
const {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
  toggleBusiness,
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:userId/:businessId", toggleBusiness);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
