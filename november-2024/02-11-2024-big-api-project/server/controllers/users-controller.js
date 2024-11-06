import { userModelSchema } from "../models/user-schema-creation.js";
import { isFalsy } from "../utils/is-falsy.js";
import { encryptedPw } from "../utils/encrypt-pw.js";
import { isPasswordValid } from "../utils/auth-user.js";
import { generateToken } from "../utils/token.js";

const getUserById = async (req, res) => {
  const userId = req.params.id;

  isFalsy(userId);

  try {
    const foundUser = await userModelSchema.findById(userId);

    isFalsy(foundUser);

    res.status(200).json({
      message: "Success found your user Id",
      dataFound: foundUser,
    });
  } catch (error) {
    console.error(`Failed to find the user: ${commentId}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to find the user :${commentId}`,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModelSchema.find();

    isFalsy(allUsers);

    res.status(200).json(allUsers);
  } catch (error) {
    console.error(`Failed to find all users: ${error}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to find all users: ${error}`,
    });
  }
};

const createNewUsers = async (req, res) => {
  try {
    const { fName, lName, email, password, profileImg, role } = req.body;
    console.log(
      req.body.fName,
      req.body.lName,
      req.body.email,
      req.body.password,
      req.body.role
    );

    const isPwSecure = await encryptedPw(password, process.env.SECRET_KEY);
    console.log(`pw secure: ${isPwSecure}`);

    const savedUserOrUsers = await userModelSchema.insertMany(req.body);

    res.status(201).json({
      message: "Success",
      response: savedUserOrUsers,
    });
  } catch (error) {
    console.error(`Failed to create a new user: ${error}`);
    res.status(400).json({
      message: "Failed",
      response: `Failed to create a new user: ${error}`,
    });
  }
};

const updateSpecificUserById = async (req, res) => {
  const userId = req.params.id;

  isFalsy(userId);

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

    isFalsy(updatedUser);

    res.status(200).json({
      message: `Success`,
      response: updatedUser,
    });
  } catch (error) {
    console.error(`Failed to update the user: ${userId}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to update the user: ${userId}`,
    });
  }
};

const deleteSpecificUserById = async (req, res) => {
  const userId = req.params.id;

  isFalsy(userId);

  try {
    const deleted = await userModelSchema.findByIdAndDelete(userId);

    isFalsy(deleted);

    res.status(200).json({
      message: `Success`,
      response: deleted,
    });
  } catch (error) {
    console.error(`Failed to delete the user: ${userId}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to delete the user: ${userId}`,
    });
  }
};

const checkUserAuth = async (req, res) => {
  const { password, email } = req.body;

  isFalsy(password && email);

  try {
    const findUser = await userModelSchema.findOne({ email });
    isFalsy(findUser);

    isPasswordValid(password, findUser.password);

    res.status(200).json({
      message: "Success",
      response: generateToken({ userId: findUser._id }),
    });
  } catch (error) {
    res.status(500).json({
      message: "Not authorized access.",
    });
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
