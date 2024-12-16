const express = require("express");
const {
  addComment,
  getPostComments,
  toggleCommentLike,
  updateComment,
  deleteComment,
} = require("../controllers/commentsController.js");
const { authUser } = require("../middleware/authUser.js");

const router = express.Router();

router.post("/:postId", authUser, addComment);//api doc last updated 2024/12/08

router.get("/:postId", getPostComments);//api doc last updated 2024/12/08

router.post("/like/:commentId", authUser, toggleCommentLike);//api doc last checked 2024/12/08

router.put("/:commentId", authUser, updateComment);//api doc last tested and updated 2024/12/08

router.delete("/:commentId", authUser, deleteComment);//api doc last checked for existence 2024/12/08

module.exports = router;
