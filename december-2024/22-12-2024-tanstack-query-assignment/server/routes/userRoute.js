const express = require("express");
const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/:email", getUser);
router.post("/register", createUser);
router.put("/:email", updateUser);
router.delete("/:email", deleteUser);

module.exports = router;
