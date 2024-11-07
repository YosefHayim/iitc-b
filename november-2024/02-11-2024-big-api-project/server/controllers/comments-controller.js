import { isFalsy } from "../utils/is-falsy.js";
import { commentModelSchema } from "../models/comment-schema-creation.js";

const getCommentById = async (req, res) => {
  const commentId = req.params.id;

  isFalsy(commentId);

  try {
    const foundComment = await commentModelSchema.findById(commentId);

    isFalsy(foundComment);

    res.status(200).json({
      message: `Success`,
      response: foundComment,
    });
  } catch (error) {
    console.error(`Failed to find the comment: ${commentId}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to find the comment :${commentId}`,
    });
  }
};

const getAllComments = async (req, res) => {
  try {
    const allComments = await commentModelSchema.find();

    isFalsy(allComments);

    res.status(200).json({
      message: "Success",
      response: allComments,
    });
  } catch (error) {
    console.error(`Failed to find all comments , error: ${error}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to find all comments , error: ${error}`,
    });
  }
};

const createNewComment = async (req, res) => {
  const comment = req.body;

  try {
    const { commentDescription, projectId, userId } = comment;

    const newComment = new commentModelSchema({
      commentDescription,
      projectId,
      userId,
    });

    const savedComment = await newComment.save();

    res.status(201).json({
      message: "Success",
      response: savedComment,
    });
  } catch (error) {
    console.error(`Failed to add a new comment , error: ${error}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to add a new comment , error: ${error}`,
    });
  }
};

const updateSpecificCommentById = async (req, res) => {
  const commentId = req.params.id;

  isFalsy(commentId);

  const { commentDescription } = req.body;

  try {
    const updateComment = await commentModelSchema.findByIdAndUpdate(
      commentId,
      {
        commentDescription,
      }
    );

    isFalsy(updateComment);

    res.status(200).json({
      message: "Success",
      response: `Success to update comment ID: ${commentId}`,
    });
  } catch (error) {
    console.error(`Failed to update the comment ID: ${commentId}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to update comment ID: ${commentId}`,
    });
  }
};

const deleteSpecificCommentById = async (req, res) => {
  const commentId = req.params.id;

  isFalsy(commentId);

  try {
    const deleted = await commentModelSchema.findByIdAndDelete(commentId);

    isFalsy(deleted);

    res.status(200).json({
      message: "Success",
      response: `Success to delete comment ID: ${commentId}`,
    });
  } catch (error) {
    console.error(`Failed to delete the comment ID: ${commentId}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to delete comment ID: ${commentId}`,
    });
  }
};

export {
  getCommentById,
  getAllComments,
  createNewComment,
  updateSpecificCommentById,
  deleteSpecificCommentById,
};
