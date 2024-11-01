import { userModelSchema } from "../models/user-schema-creation.js";
import mongoose from "mongoose";

const createNewUsers = async (req, res) => {
  let users = req.body;

  try {
    // Check if `users` is not an array
    if (!Array.isArray(users)) {
      // If `users` is a single object, perform a single insertion
      const { fName, lName, age, birthDate, location, email, role } = users;
      const newUser = new userModelSchema({
        fName,
        lName,
        age,
        birthDate,
        location,
        email,
        role,
      });

      const savedUser = await newUser.save();
      return res.status(201).json({
        message: "User added successfully",
        data: savedUser,
      });
    }

    // If `users` is an array, perform a batch insertion
    const userDocs = users.map((user) => {
      const { fName, lName, age, birthDate, location, email, role } = user;

      return {
        fName,
        lName,
        age,
        birthDate,
        location,
        email,
        role,
      };
    });

    const savedUsers = await userModelSchema.insertMany(userDocs);
    res.status(201).json({
      message: "All users added successfully",
      data: savedUsers,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error adding users: ${error}`,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModelSchema.find();
    if (allUsers) {
      res.status(200).json(allUsers);
    } else {
      res.status(404).send(`The requested schema not found.`);
    }
  } catch (error) {
    console.error(`Something happened while fetching the data: ${error}`);
  }
};

const updateSpecificUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const {
      fName,
      lName,
      age,
      birthDate,
      location: { city, state, country } = {},
      email,
      role,
    } = req.body;

    // Build the update object only with fields provided in the request body
    const updateFields = {};
    if (fName) updateFields.fName = fName;
    if (lName) updateFields.lName = lName;
    if (age) updateFields.age = age;
    if (birthDate) updateFields.birthDate = birthDate;
    if (email) updateFields.email = email;
    if (role) updateFields.role = role;
    if (city || state || country) {
      updateFields.location = {};
      if (city) updateFields.location.city = city;
      if (state) updateFields.location.state = state;
      if (country) updateFields.location.country = country;
    }

    // Update the user in the database
    const updatedUser = await userModelSchema.findByIdAndUpdate(
      userId,
      // Set is a built-in method of mongoose to only modify provided data so other data wont be deleted.
      { $set: updateFields },
      { new: true } // to return the updated document
    );

    res.send(updatedUser);
  } catch (error) {
    res.status(500).send("Error updating user data");
  }
};

const deleteSpecificUserById = async (req, res) => {
  const userId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({
      message:
        "Invalid ID format. Please provide a valid 24 letters length ID.",
    });
  }

  const isUserExist = await userModelSchema.exists({ _id: userId });

  if (isUserExist) {
    try {
      const deleted = await userModelSchema.findByIdAndDelete(userId);
      if (deleted) {
        return res.status(200).json({
          message: `user ID: ${userId} has been successfully deleted from the database.`,
        });
      }
    } catch (error) {
      console.error(`Something went wrong while performing the delete.`, error);
      return res.status(500).json({
        message: "An error occurred while deleting the user.",
      });
    }
  } else {
    res.status(404).json({
      message: `We were unable to find the user with ID: ${userId}.`,
    });
  }
};

export {
  createNewUsers,
  getAllUsers,
  updateSpecificUserById,
  deleteSpecificUserById,
};
