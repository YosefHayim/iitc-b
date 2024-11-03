import { userModelSchema } from "../models/user-schema-creation.js";
import mongoose from "mongoose";
import { isFalsy } from "../middleware/is-falsy.js";
import { isBodyEmpty } from "../middleware/check-body-not-empty.js";

const getUserById = async (req, res, next) => {
  const userId = req.params.id;

  isFalsy(userId);

  try {
    const foundUser = await userModelSchema.findById(userId);
    res.status(200).json({
      message: "Success found your user Id",
      dataFound: foundUser,
    });
  } catch (error) {
    console.error(`Database doesn't have the user ID ${userId}.`);
    error.type = `NOT_FOUND`;
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await userModelSchema.find();
    if (allUsers) {
      res.status(200).json(allUsers);
    } else {
      throw new Error("NOT_FOUND");
    }
  } catch (error) {
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const createNewUsers = async (req, res, next) => {
  let users = req.body;

  isBodyEmpty(projects);

  try {
    if (!Array.isArray(users)) {
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

    const userDocs = users.map((user) => {
      const { fName, lName, age, birthDate, location, email, role } = user;
      return { fName, lName, age, birthDate, location, email, role };
    });

    const savedUsers = await userModelSchema.insertMany(userDocs);
    res.status(201).json({
      message: "All users added successfully",
      data: savedUsers,
    });
  } catch (error) {
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const updateSpecificUserById = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const {
      fName,
      lName,
      age,
      birthDate,
      location: { city, state, country } = {},
      email,
      role,
    } = req.body;

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

    const updatedUser = await userModelSchema.findByIdAndUpdate(
      userId,
      { $set: updateFields },
      { new: true }
    );

    res.json({
      message: `Successfully updated user ${userId}:`,
      updatedData: updatedUser,
    });
  } catch (error) {
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const deleteSpecificUserById = async (req, res, next) => {
  const userId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("NOT_FOUND");
  }

  const isUserExist = await userModelSchema.exists({ _id: userId });

  if (isUserExist) {
    try {
      const deleted = await userModelSchema.findByIdAndDelete(userId);
      if (deleted) {
        return res.status(200).json({
          message: `User ID: ${userId} has been successfully deleted from the database.`,
        });
      }
    } catch (error) {
      console.error(`Something went wrong while performing the delete.`, error);
      error.type = `SERVER_ERROR`;
      next(error);
    }
  } else {
    throw new Error("NOT_FOUND");
  }
};

export {
  createNewUsers,
  getAllUsers,
  updateSpecificUserById,
  deleteSpecificUserById,
  getUserById,
};
