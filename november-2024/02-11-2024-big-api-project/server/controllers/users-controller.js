import { userModelSchema } from "../models/user-schema-creation.js";
import { isFalsy } from "../middleware/is-falsy.js";
import { isBodyEmpty } from "../middleware/check-body-not-empty.js";
import { encryptedPw } from "../utils/encrypt-pw.js";
import { isPasswordValid } from "../utils/auth-user.js";

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
  let user = req.body;

  isBodyEmpty(user, next);

  const isPwSecure = await encryptedPw(req.body.password);

  isFalsy(isPwSecure);

  try {
    const { fName, lName, email, password } = user;

    const newUser = new userModelSchema({
      fName,
      lName,
      email,
      password: isPwSecure,
    });

    const saveUser = await newUser.save();
    if (saveUser) {
      console.log(`The user ${fName} has been added to the database`);
    }

    return res.status(201).json({
      message: "Successfully Register",
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

const checkUserAuth = async (req, res, next) => {
  const { password, email } = req.body;

  isFalsy(password && email);

  try {
    const findUser = userModelSchema.find(email);
    isFalsy(findUser);

    isPasswordValid(findUser.password, hashedPw);
  } catch (error) {
    console.error(`Error occurred while calling to compare function: ${error}`);
  }
};

export {
  checkUserAuth,
  createNewUsers,
  getAllUsers,
  updateSpecificUserById,
  deleteSpecificUserById,
  getUserById,
};
