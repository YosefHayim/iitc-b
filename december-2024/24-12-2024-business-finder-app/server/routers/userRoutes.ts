import express, { NextFunction, Request, Response } from "express";
import { User } from "../models/userModel";

const router = express.Router();

// Get all users
router.get(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Logic to fetch all users
      const users = await User.find();

      if (!users) {
      }

      res.status(200).json({
        status: "Success",
        total: users.length,
        response: users,
      });
    } catch (error) {
      next(error);
    }
  }
);

// Get a specific user by ID
router.get("/:id", async (req, res, next): Promise<void> => {
  try {
    const { id } = req.params;
    // Logic to fetch a user by ID
    res.status(200).json({ message: `Fetched user with ID: ${id}` });
  } catch (error) {
    next(error);
  }
});

// Create a new user
router.post("/", async (req, res, next): Promise<void> => {
  try {
    const userData = req.body;
    // Logic to create a new user
    res.status(201).json({ message: "User created.", user: userData });
  } catch (error) {
    next(error);
  }
});

// Update a user by ID
router.put("/:id", async (req, res, next): Promise<void> => {
  try {
    const { id } = req.params;
    const userData = req.body;
    // Logic to update user with the given ID
    res
      .status(200)
      .json({ message: `User with ID: ${id} updated.`, user: userData });
  } catch (error) {
    next(error);
  }
});

// Delete a user by ID
router.delete("/:id", async (req, res, next): Promise<void> => {
  try {
    const { id } = req.params;
    // Logic to delete user with the given ID
    res.status(200).json({ message: `User with ID: ${id} deleted.` });
  } catch (error) {
    next(error);
  }
});

export default router;
