import { isFalsy } from "../utils/is-falsy.js";
import { projectModelSchema } from "../models/project-schema-creation.js";

const getProjectById = async (req, res) => {
  const projectId = req.params.id;

  isFalsy(projectId);

  try {
    const foundProject = await projectModelSchema.findById(projectId);

    isFalsy(foundProject);

    res.status(200).json({
      message: "Success",
      response: foundProject,
    });
  } catch (error) {
    console.error(
      `Failed to find the project ID: ${projectId} , error: ${error}`
    );

    res.status(404).json({
      message: "Failed",
      response: `Failed to find the project ID :${projectId} , error: ${error}`,
    });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const allProjects = await projectModelSchema
      .find()
      .populate("userSchema", "fName lName profileImg");

    isFalsy(allProjects);

    res.status(200).json({
      message: "Success",
      response: allProjects,
    });
  } catch (error) {
    console.error(`Failed to find all projects , error: ${error}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to find all projects , error: ${error}`,
    });
  }
};

const createNewProject = async (req, res) => {
  const project = req.body;

  try {
    const { name, description, status, user } = project;

    const newProject = new projectModelSchema({
      name,
      description,
      status,
      user,
    });

    const savedProject = await newProject.save();

    res.status(201).json({
      message: "Success",
      response: savedProject,
    });
  } catch (error) {
    console.error(`Failed to add a new project , error: ${error}`);

    res.status(404).json({
      message: "Failed",
      response: `Failed to add a new project , error: ${error}`,
    });
  }
};

const updateSpecificProjectById = async (req, res) => {
  const projectId = req.params.id;

  isFalsy(projectId);

  const { name, description, status, user } = req.body;

  try {
    const updateFields = {};
    updateFields.name = name;
    updateFields.description = description;
    updateFields.status = status;
    updateFields.user = user;

    const updatedProject = await projectModelSchema.findByIdAndUpdate(
      projectId,
      { $set: updateFields },
      { new: true }
    );

    isFalsy(updatedProject);

    res.status(201).json({
      message: "Success",
      response: updatedProject,
    });
  } catch (error) {
    console.error(
      `Failed to update the project: ${projectId} , error: ${error}`
    );

    res.status(404).json({
      message: "Failed",
      response: `Failed to update the project: ${projectId} , error: ${error}`,
    });
  }
};

const deleteSpecificProjectById = async (req, res) => {
  const projectId = req.params.id;

  isFalsy(projectId);

  try {
    const deleted = await projectModelSchema.findByIdAndDelete(projectId);

    isFalsy(deleted);

    res.status(200).json({
      message: `Success`,
      response: deleted,
    });
  } catch (error) {
    console.error(
      `Failed to delete the project: ${projectId} , error: ${error}`
    );

    res.status(404).json({
      message: "Failed",
      response: `Failed to delete the project: ${projectId} , error: ${error}`,
    });
  }
};

export {
  createNewProject,
  deleteSpecificProjectById,
  updateSpecificProjectById,
  getAllProjects,
  getProjectById,
};
