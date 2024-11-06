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
      dataFound: foundComment,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Failed",
      reason: `Failed to find the comment :${commentId}`,
    });
  }
};

const getAllComments = async (req, res, next) => {
  try {
    const allProjects = await commentModelSchema
      .find()
      .populate("userSchema", "fName lName profileImg");

    isFalsy(allProjects, next);

    res.status(200).json(allProjects);
  } catch (error) {
    console.error(`Something went wrong while fetching projects => ${error}`);
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const createNewComment = async (req, res, next) => {
  const project = req.body;

  isBodyEmpty(project, next);

  try {
    const { name, description, status, user } = project;

    const newProject = new commentModelSchema({
      name,
      description,
      status,
      user,
    });

    const savedProject = await newProject.save();
    return res.status(201).json({
      message: "Project added successfully",
      data: savedProject,
    });
  } catch (error) {
    console.error(`Something happened while inserting data => ${error}`);
    error.type = `SERVER_ERROR`;
    next(error);
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

    const updatedProject = await commentModelSchema.findByIdAndUpdate(
      commentId,
      { $set: updateFields },
      { new: true }
    );

    isFalsy(updatedProject, next);

    res.status(200).json(updatedProject);
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

  const isProjectExist = await commentModelSchema.exists({ _id: commentId });
  isFalsy(isProjectExist, next);

  try {
    const deleted = await commentModelSchema.findByIdAndDelete(commentId);

    isFalsy(deleted, next);

    res.status(200).json({
      message: `Project ID: ${commentId} has been successfully deleted from the database.`,
    });
  } catch (error) {
    console.error(`Error deleting project ${commentId} => ${error}`);
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

export {
  getCommentById,
  getAllComments,
  createNewComment,
  updateSpecificCommentById,
  deleteSpecificCommentById,
};
