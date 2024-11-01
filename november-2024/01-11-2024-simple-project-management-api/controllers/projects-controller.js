import { projectModelSchema } from "../models/project-schema-creation.js";
import mongoose from "mongoose";

const createNewProject = async (req, res) => {
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
    res.status(500).json({
      message: `Error adding users: ${error}`,
    });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const allProjects = await projectModelSchema.find();
    if (allProjects) {
      res.status(200).json(allProjects);
    } else {
      res.status(404).send(`The requested schema not found.`);
    }
  } catch (error) {
    console.error(`Something happened while fetching the data: ${error}`);
  }
};

const updateSpecificProjectById = async (req, res) => {
  try {
    const projectId = req.params.id;

    const { name, description, status } = req.body;

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
    res.status(500).send("Error updating user data");
  }
};

const deleteSpecificProjectById = async (req, res) => {
  const projectId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    return res.status(400).json({
      message:
        "Invalid ID format. Please provide a valid 24 letters length ID.",
    });
  }

  const isProjectExist = await projectModelSchema.exists({ _id: projectId });

  if (isProjectExist) {
    try {
      const deleted = await projectModelSchema.findByIdAndDelete(projectId);
      if (deleted) {
        return res.status(200).json({
          message: `user ID: ${projectId} has been successfully deleted from the database.`,
        });
      }
    } catch (error) {
      console.error(`Something went wrong while performing the delete.`, error);
      return res.status(500).json({
        message: "An error occurred while deleting the user.",
      });
    }
  } else {
    res.status(404).json({
      message: `We were unable to find the user with ID: ${projectId}.`,
    });
  }
};

export {
  createNewProject,
  deleteSpecificProjectById,
  updateSpecificProjectById,
  getAllProjects,
};
