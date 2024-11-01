import express from "express";
import mongoose from "mongoose";
import { userModelSchema } from "../models/user-schema-creation.js";

const router = express.Router();

router.get("/users", (req, res) => {
  res
    .status(200)
    .send("You have successfully arrived to the GET METHOD of users path.");
});

router.post("/users", async (req, res) => {
  const users = req.body;

  const data = await users.forEach((user) => {
    const { fName, lName, age, birthDate, location: { city, state, country }, email, role } = user;

    try {
      
    } catch (error) {
      res.status(404).json({
        message: `Something happened while adding to the database: ${error}.`
      })
    }

  });

  res.status(200).json({
    message: 'Successfully added',
    dataAdded: users
  });
});

router.patch("/users/:id", (req, res) => {
  res
    .status(200)
    .send("You have successfully arrived to the patch METHOD of users path.");
});

router.delete("/users/:id", (req, res) => {
  res
    .status(200)
    .send("You have successfully arrived to the delete METHOD of users path.");
});

export default router;
