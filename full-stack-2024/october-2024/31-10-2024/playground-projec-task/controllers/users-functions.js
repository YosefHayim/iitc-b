import { isKeysValid } from "../middleware/check-body-keys-valid.js";
import { isFalsy } from "../middleware/is-falsy.js";
import { userProjectSchema } from "../models/users-project-schema.js";

const getUserById = async (req, res, next) => {
  const userId = req.params.id;

  isFalsy(userId,next);

  try {
    const findUserById = await userProjectSchema.findById(userId);

    isFalsy(findUserById,next);

    res.status(200).json({
      message: "Success Found your user!",
      dataFound: findUserById,
    });
  } catch (error) {
    next({ type: `NOT_FOUND` });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const data = await userProjectSchema.find();
    res.status(200).json(data);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
};

const createNewUsers = async (req, res, next) => {
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

  isKeysValid(req.body,next);

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
};

const updateUserById = async (req, res, next) => {
  const userId = req.params.id;

  isFalsy(userId,next);

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

    isFalsy(updatedUser,next);

    res.status(200).json(updatedUser);
  } catch (error) {
    next({ type: "SERVER_ERROR" });
  }
};

const deleteUserById = async (req, res, next) => {
  const userId = req.params.id;

  isFalsy(userId,next);

  try {
    const deletedUser = await userProjectSchema.findByIdAndDelete(userId);

    isFalsy(deletedUser,next);

    res
      .status(200)
      .json({ message: `User with ID ${userId} deleted successfully` });
  } catch (error) {
    next({ type: "NOT_FOUND" });
  }
};

export {
  getUserById,
  getAllUsers,
  createNewUsers,
  updateUserById,
  deleteUserById,
};
