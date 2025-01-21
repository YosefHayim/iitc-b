const express = require("express");
const createUploadMiddleware = require("../middleware/uploadMiddleware.js");
const {
  addPost,
  getAllPosts,
  getPostById,
  toggleLikePost,
  savePost,
  deletePost,
} = require("../controllers/postsController.js");
const { authUser } = require("../middleware/authUser.js");

const uploadPostImage = createUploadMiddleware("posts", "postImage");

const router = express.Router();

router.use("/", authUser);

router.get("/", getAllPosts);

router.get("/:postId", getPostById);

router.post("/", uploadPostImage, addPost);

router.post("/:postId/like", toggleLikePost);

router.post("/:postId/save", savePost);

router.delete("/:postId", deletePost);

module.exports = router;
