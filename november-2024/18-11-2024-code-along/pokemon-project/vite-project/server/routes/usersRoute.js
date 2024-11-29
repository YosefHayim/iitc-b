const express = require("express");
const { getAllUsers, createUser } = require("../controllers/usersControllers");

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/register", createUser);

module.exports = router;
