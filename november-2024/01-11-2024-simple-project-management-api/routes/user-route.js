import express from "express";
import {
  createNewUsers,
  deleteSpecificUserById,
  getAllUsers,
  updateSpecificUserById,
} from "../controllers/users-controller.js";

const router = express.Router();

router.get("/users", getAllUsers);

router.post("/users", createNewUsers);

router.patch("/users/:id", updateSpecificUserById);

router.delete("/users/:id", deleteSpecificUserById);

export default router;
