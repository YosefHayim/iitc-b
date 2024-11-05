import { userModelSchema } from "../models/user-schema-creation.js";
import { isFalsy } from "../middleware/is-falsy.js";
import { isBodyEmpty } from "../middleware/check-body-not-empty.js";

const getUserById = async (req, res, next) => {
  const userId = req.params.id;

  isFalsy(userId, next);

  try {
    const foundUser = await userModelSchema.findById(userId);

    isFalsy(foundUser, next);

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

    isFalsy(allUsers, next);

    res.status(200).json(allUsers);
  } catch (error) {
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const createNewUsers = async (req, res, next) => {
  let users = req.body;
  console.log(users);

  isBodyEmpty(users, next);

  try {
    if (!Array.isArray(users)) {
      const { fName, lName, age, birthDate, location, email, role, password } =
        users;
      const newUser = new userModelSchema({
        fName,
        lName,
        age,
        birthDate,
        location,
        email,
        role,
        password,
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

    isFalsy(savedUsers, next);

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

  isFalsy(userId, next);

  isBodyEmpty(req.body, next);

  try {
    const {
      fName,
      lName,
      age,
      birthDate,
      location: { city, state, country } = {},
      email,
      role,
      password,
    } = req.body;

    const updateFields = {};
    if (fName) updateFields.fName = fName;
    if (lName) updateFields.lName = lName;
    if (age) updateFields.age = age;
    if (email) updateFields.email = email;
    if (password) updateFields.password = password;
    if (birthDate) updateFields.birthDate = birthDate;
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

    isFalsy(updatedUser, next);

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

  isFalsy(userId, next);

  const isUserExist = await userModelSchema.exists({ _id: userId });

  isFalsy(isUserExist, next);
  try {
    const deleted = await userModelSchema.findByIdAndDelete(userId);

    isFalsy(deleted, next);

    res.status(200).json({
      message: `User ID: ${userId} has been successfully deleted from the database.`,
    });
  } catch (error) {
    console.error(`Something went wrong while performing the delete.`, error);
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

export {
  createNewUsers,
  getAllUsers,
  updateSpecificUserById,
  deleteSpecificUserById,
  getUserById,
};
