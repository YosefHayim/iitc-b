import { isBodyEmpty } from "../middleware/check-body-not-empty.js";
import { isFalsy } from "../middleware/is-falsy.js";
import { projectModelSchema } from "../models/project-schema-creation.js";

const getProjectById = async (req, res, next) => {
  const projectId = req.params.id;

  isFalsy(projectId, next);

  try {
    const foundProject = await projectModelSchema.findById(projectId);

    isFalsy(foundProject, next);

    res.status(200).json({
      message: "Success found your project Id",
      dataFound: foundProject,
    });
  } catch (error) {
    console.error(`Database doesn't have the project ID ${projectId}.`);
    error.type = `NOT_FOUND`;
    next(error);
  }
};

const getAllProjects = async (req, res, next) => {
  try {
    const allProjects = await projectModelSchema
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

const createNewProject = async (req, res, next) => {
  const project = req.body;

  isBodyEmpty(project, next);

  try {
    const { name, description, status, user } = project;

    const newProject = new projectModelSchema({
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

const updateSpecificProjectById = async (req, res, next) => {
  const projectId = req.params.id;

  isFalsy(projectId, next);

  const { name, description, status, user } = req.body;

  isBodyEmpty(req.body, next);

  try {
    const updateFields = {};
    if (name) updateFields.name = name;
    if (description) updateFields.description = description;
    if (status) updateFields.status = status;
    if (user) updateFields.user = user;

    const updatedProject = await projectModelSchema.findByIdAndUpdate(
      projectId,
      { $set: updateFields },
      { new: true }
    );

    isFalsy(updatedProject, next);

    res.status(200).json(updatedProject);
  } catch (error) {
    console.error(
      `Something went while updating schema ID ${projectId} => ${error}`
    );
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const deleteSpecificProjectById = async (req, res, next) => {
  const projectId = req.params.id;

  isFalsy(projectId, next);

  const isProjectExist = await projectModelSchema.exists({ _id: projectId });
  isFalsy(isProjectExist, next);

  try {
    const deleted = await projectModelSchema.findByIdAndDelete(projectId);

    isFalsy(deleted, next);

    res.status(200).json({
      message: `Project ID: ${projectId} has been successfully deleted from the database.`,
    });
  } catch (error) {
    console.error(`Error deleting project ${projectId} => ${error}`);
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

export {
  createNewProject,
  deleteSpecificProjectById,
  updateSpecificProjectById,
  getAllProjects,
  getProjectById,
};
