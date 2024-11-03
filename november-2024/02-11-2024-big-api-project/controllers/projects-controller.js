import { isBodyEmpty } from "../middleware/check-body-not-empty.js";
import { isFalsy } from "../middleware/is-falsy.js";
import { projectModelSchema } from "../models/project-schema-creation.js";
import mongoose from "mongoose";

const getProjectById = async (req, res, next) => {
  const projectId = req.params.id;

  isFalsy(projectId);

  try {
    const foundProject = await projectModelSchema.findById(projectId);
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
    const allProjects = await projectModelSchema.find();
    if (allProjects) {
      res.status(200).json(allProjects);
    } else {
      const error = new Error(`Couldn't find projects`);
      error.type = `NOT_FOUND`;
      next(error);
    }
  } catch (error) {
    console.error(`Something went wrong while fetching projects => ${error}`);
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const createNewProject = async (req, res, next) => {
  const projects = req.body;

  isBodyEmpty(projects);

  try {
    if (!Array.isArray(projects)) {
      const { name, description, status } = projects;

      const newProject = new projectModelSchema({
        name,
        description,
        status,
      });

      const savedProject = await newProject.save();
      return res.status(201).json({
        message: "Project added successfully",
        data: savedProject,
      });
    }

    const projectsDocs = projects.map((project) => {
      const { name, description, status } = project;
      return { name, description, status };
    });

    const savedProjects = await projectModelSchema.insertMany(projectsDocs);
    res.status(201).json({
      message: "All projects added successfully",
      data: savedProjects,
    });
  } catch (error) {
    console.error(`Something happened while inserting data => ${error}`);
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const updateSpecificProjectById = async (req, res, next) => {
  const projectId = req.params.id;

  isFalsy(projectId);

  const { name, description, status } = req.body;

  try {
    const updateFields = {};
    if (name) updateFields.name = name;
    if (description) updateFields.description = description;
    if (status) updateFields.status = status;

    const updatedTask = await projectModelSchema.findByIdAndUpdate(
      projectId,
      { $set: updateFields },
      { new: true }
    );

    res.send(updatedTask);
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

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    const error = new Error(`Invalid project ID: ${projectId}`);
    error.type = `NOT_FOUND`;
    return next(error);
  }

  const isProjectExist = await projectModelSchema.exists({ _id: projectId });
  if (!isProjectExist) {
    const error = new Error(`Project not found`);
    error.type = `NOT_FOUND`;
    return next(error);
  }

  try {
    const deleted = await projectModelSchema.findByIdAndDelete(projectId);
    if (deleted) {
      return res.status(200).json({
        message: `Project ID: ${projectId} has been successfully deleted from the database.`,
      });
    }
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
