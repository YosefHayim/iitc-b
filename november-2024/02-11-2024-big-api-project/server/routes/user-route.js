import express from "express";
import {
  checkUserAuth,
  createNewUsers,
  deleteSpecificUserById,
  getAllUsers,
  getUserById,
  updateSpecificUserById,
} from "../controllers/users-controller.js";

const router = express.Router();

router.get("/user/:id", getUserById);

router.get("/users", getAllUsers);

router.post("/login", checkUserAuth);

router.post("/users", createNewUsers);

router.patch("/users/:id", updateSpecificUserById);

router.delete("/users/:id", deleteSpecificUserById);

export default router;
