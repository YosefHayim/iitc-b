import express from "express";
import { userProjectSchema } from "../models/users-project-schema.js";

const router = express.Router();

// Get user by Id
router.get("/:id", async (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    next({ type: `The user ID you provided is unknown: ${userId}` });
    return;
  }

  try {
    const findUserById = await userProjectSchema.findById(userId);

    if (findUserById) {
      res.status(200).json({
        message: "Success Found your user!",
        dataFound: findUserById,
      });
    } else {
      res.status(404).json({
        message: `Failed to find your user: ${userId}`,
      });
    }
  } catch (error) {
    next({ type: `The Id provided has not been found: ${userId}` });
  }
});

// Fetch all users
router.get("", async (req, res, next) => {
  try {
    const data = await userProjectSchema.find();
    res.status(200).json(data);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
});

// Create a new user
router.post("", async (req, res, next) => {
  const {
    fName,
    lName,
    age,
    gender,
    birthDate,
    location,
    email,
    agreeToTerms,
  } = req.body;

  for (const [key, value] of Object.entries(req.body)) {
    if (!value) {
      return next({ type: "VALIDATION_ERROR" });
    }
  }

  try {
    const newUser = new userProjectSchema({
      fName,
      lName,
      age,
      gender,
      birthDate,
      location,
      email,
      agreeToTerms,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
});

// Update an existing user by ID
router.put("/:id", async (req, res, next) => {
  const userId = req.params.id;
  const {
    fName,
    lName,
    age,
    gender,
    birthDate,
    location,
    email,
    agreeToTerms,
  } = req.body;

  try {
    const updatedUser = await userProjectSchema.findByIdAndUpdate(
      userId,
      { fName, lName, age, gender, birthDate, location, email, agreeToTerms },
      { new: true }
    );

    if (!updatedUser) {
      return next({ type: "NOT_FOUND" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
});

// Delete a user by ID
router.delete("/:id", async (req, res, next) => {
  const userId = req.params.id;

  try {
    const deletedUser = await userProjectSchema.findByIdAndDelete(userId);

    if (!deletedUser) {
      return next({ type: "NOT_FOUND" });
    }

    res
      .status(200)
      .json({ message: `User with ID ${userId} deleted successfully` });
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
});

export default router;
