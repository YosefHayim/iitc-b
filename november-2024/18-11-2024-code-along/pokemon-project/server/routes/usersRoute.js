const express = require("express");
const {
  getAllUsers,
  createUser,
  validateUser,
} = require("../controllers/usersControllers");

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/register", createUser);
// http://localhost:3000/users/register

router.post("/login", validateUser);

module.exports = router;
