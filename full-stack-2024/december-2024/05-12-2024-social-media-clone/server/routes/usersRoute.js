const express = require("express");
const createUploadMiddleware = require("../middleware/uploadMiddleware.js");
const {
  getAllUsers,
  getUserByUsername,
  addUser,
  login,
  logout,
  catchAll,
  getUserData,
  followUser,
  getUserSavedPosts,
  updateUserData,
  deleteUser,
} = require("../controllers/usersController.js");

const { authUser } = require("../middleware/authUser.js");

const uploadProfilePicture = createUploadMiddleware(
  "profile-pics",
  "profileImage"
);

const router = express.Router();

router.get("/", authUser, getAllUsers);
router.post("/signup", authUser, uploadProfilePicture, addUser);
router.post("/login", login);
router.post("/logout", authUser, logout);

router.get("/data", authUser, getUserData);
router.get("/data/:id", authUser, getUserData);
router.get("/data/:username", authUser, getUserData);
router.get("/saved-posts", authUser, getUserSavedPosts);
router.get("/saved-posts/:id", authUser, getUserSavedPosts);
router.post("/follow/:id", authUser, followUser);
router.put("/edit-profile", authUser, uploadProfilePicture, updateUserData);
router.delete("/:id", authUser, deleteUser);

router.use(catchAll);

module.exports = router;
