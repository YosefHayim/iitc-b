import { projectModelSchema } from "../models/project-schema-creation.js";
import mongoose from "mongoose";

const createNewProject = async (req, res, next) => {
  let projects = req.body;

  try {
    // Check if `users` is not an array
    if (!Array.isArray(projects)) {
      // If `users` is a single object, perform a single insertion
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

    // If `users` is an array, perform a batch insertion
    const projectsDocs = projects.map((project) => {
      const { name, description, status } = project;

      return {
        name,
        description,
        status,
      };
    });

    const savedProjects = await projectModelSchema.insertMany(projectsDocs);
    res.status(201).json({
      message: "All projects added successfully",
      data: savedProjects,
    });
  } catch (error) {
    console.error(
      `Something happened while inserting data ${
        savedProject || savedProjects
      } => ${error}`
    );
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const getAllProjects = async (req, res, next) => {
  try {
    const allProjects = await projectModelSchema.find();
    if (allProjects) {
      res.status(200).json(allProjects);
    } else {
      console.error(`Could't find ${allProjects} => ${error}`);
      error.type = `NOT_FOUND`;
      next(error);
    }
  } catch (error) {
    console.error(
      `Something went wrong while fetching ${projectModelSchema} => ${error}`
    );
    error.type = `SERVER_ERROR`;
    next(error);
  }
};

const updateSpecificProjectById = async (req, res, next) => {
  const projectId = req.params.id;

  const { name, description, status } = req.body;

  try {
    // Build the update object only with fields provided in the request body
    const updateFields = {};
    if (name) updateFields.name = name;
    if (description) updateFields.description = description;
    if (status) updateFields.status = status;

    // Update the user in the database
    const updatedTask = await projectModelSchema.findByIdAndUpdate(
      projectId,
      // Set is a built-in method of mongoose to only modify provided data so other data wont be deleted.
      { $set: updateFields },
      { new: true } // to return the updated document
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
    console.error(`Could't find the projectID ${projectId} => ${error}`);
    error.type = `NOT_FOUND`;
    next(error);
  }

  const isProjectExist = await projectModelSchema.exists({ _id: projectId });

  if (isProjectExist) {
    try {
      const deleted = await projectModelSchema.findByIdAndDelete(projectId);
      if (deleted) {
        return res.status(201).json({
          message: `user ID: ${projectId} has been successfully deleted from the database.`,
        });
      }
    } catch (error) {
      console.error(
        `Something went wrong while locating / delete project ${projectId} => ${error}`
      );
      error.type = `SERVER_ERROR`;
      next(error);
    }
  } else {
    console.error(`Something went wrong: ${error}`);
    error.type = `NOT_FOUND`;
    next(error);
  }
};

export {
  createNewProject,
  deleteSpecificProjectById,
  updateSpecificProjectById,
  getAllProjects,
};