import { isBodyEmpty } from "../middleware/check-body-not-empty.js";
import { isFalsy } from "../middleware/is-falsy.js";
import { commentModelSchema } from "../models/comment-schema-creation.js";

const getCommentById = async (req, res, next) => {
  const commentId = req.params.id;

  isFalsy(commentId, next);

  try {
    const foundComment = await commentModelSchema.findById(commentId);

    isFalsy(foundComment, next);

    res.status(200).json({
      message: `Success`,
      response: foundComment,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Failed",
      response: `Failed to find the comment :${commentId}`,
    });
  }
};

const getAllComments = async (req, res, next) => {
  try {
    const allComments = await commentModelSchema.find();

    isFalsy(allComments, next);

    res.status(200).json({
      msg: "Success",
      response: allComments,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Failed",
      response: `Failed to find all comments`,
    });
  }
};

const createNewComment = async (req, res, next) => {
  const comment = req.body;

  isBodyEmpty(comment, next);

  try {
    const { commentDescription, projectId, userId } = comment;

    const newComment = new commentModelSchema({
      commentDescription,
      projectId,
      userId,
    });

    const savedComment = await newComment.save();
    return res.status(201).json({
      message: "comment added successfully",
      response: savedComment,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Failed",
      response: `Failed to add a new comment`,
    });
  }
};

const updateSpecificCommentById = async (req, res, next) => {
  const commentId = req.params.id;

  isFalsy(commentId, next);

  const { name, description, status, user } = req.body;

  isBodyEmpty(req.body, next);

  try {
    const updateFields = {};
    if (name) updateFields.name = name;
    if (description) updateFields.description = description;
    if (status) updateFields.status = status;
    if (user) updateFields.user = user;

    const updatedcomment = await commentModelSchema.findByIdAndUpdate(
      commentId,
      { $set: updateFields },
      { new: true }
    );

    isFalsy(updatedcomment, next);

    res.status(200).json(updatedcomment);
  } catch (error) {
    console.error(
      `Something went while updating schema ID ${commentId} => ${error}`
    );
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const deleteSpecificCommentById = async (req, res, next) => {
  const commentId = req.params.id;

  isFalsy(commentId, next);

  const iscommentExist = await commentModelSchema.exists({ _id: commentId });
  isFalsy(iscommentExist, next);

  try {
    const deleted = await commentModelSchema.findByIdAndDelete(commentId);

    isFalsy(deleted, next);

    res.status(200).json({
      message: `comment ID: ${commentId} has been successfully deleted from the database.`,
    });
  } catch (error) {
    console.error(`Error deleting comment ${commentId} => ${error}`);
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

export {
  getCommentById,
  getAllComments,
  createnewComment,
  updateSpecificCommentById,
  deleteSpecificCommentById,
};
