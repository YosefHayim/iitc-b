const Post = require("../models/postModel");

// Create a new post
const createPost = async (req, res, next) => {
  try {
    const { id, title, postContent, authorName } = req.body;

    if (!id || !title || !postContent || !authorName) {
      const error = new Error(
        "All fields (id, title, postContent, authorName) are required"
      );
      error.statusCode = 400;
      throw error;
    }

    const existingPost = await Post.findOne({ id });
    if (existingPost) {
      const error = new Error("A post with this ID already exists");
      error.statusCode = 409; // Conflict
      throw error;
    }

    const newPost = new Post({ id, title, postContent, authorName });
    const savedPost = await newPost.save();

    res
      .status(201)
      .json({ message: "Post created successfully", post: savedPost });
  } catch (error) {
    next(error);
  }
};

// Get all posts
const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

// Get a single post by ID
const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await Post.findOne({ _id: id });
    if (!post) {
      const error = new Error(`Post with ID '${id}' not found`);
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

// Update a post by ID
const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (!Object.keys(updates).length) {
      const error = new Error("No fields provided to update");
      error.statusCode = 400;
      throw error;
    }

    const updatedPost = await Post.findOneAndUpdate({ id }, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedPost) {
      const error = new Error(`Post with ID '${id}' not found`);
      error.statusCode = 404;
      throw error;
    }

    res
      .status(200)
      .json({ message: "Post updated successfully", post: updatedPost });
  } catch (error) {
    next(error);
  }
};

// Delete a post by ID
const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedPost = await Post.findOneAndDelete({ id });
    if (!deletedPost) {
      const error = new Error(`Post with ID '${id}' not found`);
      error.statusCode = 404;
      throw error;
    }

    res
      .status(200)
      .json({ message: "Post deleted successfully", post: deletedPost });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
};
