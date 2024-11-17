import { Response } from "express";
import User from "../models/UserModel.js"; // Assuming you have a User model
import {
  userLoginZodValidation,
  userZodValidation,
} from "../types/zodTypes.js";
import { AuthRequest } from "../types/postTypes.js";
import {
  tokenType,
  userLoginValidation,
  userValidation,
} from "../types/userTypes.js";
import { jenerateTokenSetCookie } from "../Utils/handleToken.js";
import mongoose from "mongoose";
import Post from "../models/PostModels.js";

// Create a new user
export const createUser = async (req: AuthRequest, res: Response) => {
  try {
    const body: userValidation = await req.body;

    // Input Validation with Zod:
    const { success, data, error } = userZodValidation.safeParse(body);
    if (!success) {
      return res.status(400).json({ message: "Validation errors", error });
    }
    const { username, email, password } = data;
    // Check for Existing Username or Email (Combined):
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      const existingField =
        existingUser.username === username ? "username" : "email";
      return res
        .status(400)
        .json({ message: `${existingField} already exists` });
    }
    // Create and Save New User:
    const newUser = new User({ username, email, password });
    const savedUser = await newUser.save();
    const tokendata: tokenType = {
      userid: savedUser._id as mongoose.Schema.Types.ObjectId,
      username: savedUser.username,
      email: savedUser.email,
    };
    // Generate Token (if applicable):
    const token = jenerateTokenSetCookie(req, res, tokendata); // Pass savedUser._id for token generation

    if (!token) {
      return res
        .status(400)
        .json({ message: "some error while create a token" });
    }
  } catch (err) {
    console.error("Error creating user:", err);
    return res.status(500).json({ message: "Error creating user", error: err }); // Provide a more informative error message
  }
};

// login user

export const loginUser = async (req: AuthRequest, res: Response) => {
  try {
    const body: userLoginValidation = await req.body;
    const { success, data, error } = userLoginZodValidation.safeParse(body);
    if (!success) {
      return res.status(400).json({ message: "Validation errors", error });
    }
    const { username, password } = data;
    const userFind = await User.findOne({ username }).select("password");
    if (!userFind) {
      return res
        .status(400)
        .json({ message: "username is incorrect or not register" });
    }
    if (password !== userFind.password) {
      return res.status(400).json({ message: "your password incorrect" });
    }
    const tokendata: tokenType = {
      userid: userFind._id as mongoose.Schema.Types.ObjectId,
      username: userFind.username,
      email: userFind.email,
    };
    // Generate Token (if applicable):
    const token = jenerateTokenSetCookie(req, res, tokendata); // Pass savedUser._id for token generation
    if (!token) {
      return res
        .status(400)
        .json({ message: "some error while create a token" });
    }
  } catch (error) {
    return res.status(500).json({ message: "internal server error", error });
  }
};
// logout user
export const logoutUser = async (req: AuthRequest, res: Response) => {
  try {
    return res.cookie("token", "", { maxAge: 0 }).status(200).json({
      message: "Logged out successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
// Get all users
export const getAllUsers = async (req: AuthRequest, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};
// Get a single user by ID
export const getUserById = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(201).json({ message: "please pass userid" });
    }
    const user = await User.findById(userId);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};
// Delete a user by ID
export const deleteUser = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(201).json({ message: "please pass userid" });
    }
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found", data: {} });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};
// Likes a post
export const likeUserPost = async (req: AuthRequest, res: Response) => {
  try {
    const postId = req.params.id;
    const userId = req.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json({ message: "post does not exists" });
    }
    const likePost = await post.updateOne({ $addToSet: { likes: userId } });
    await post.save();
    const addPostIdInUserLike = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { likes: post._id } }, // $addToSet ensures no duplicates
      { new: true }
    ).lean();
    if (!likePost || !addPostIdInUserLike) {
      return res.status(400).json({ message: "Some error to Like this Post" });
    }
    return res
      .status(200)
      .json({ message: "succes to like post", data: addPostIdInUserLike });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error });
  }
};
// DislikePost
export const dislikeUserPost = async (req: AuthRequest, res: Response) => {
  try {
    const postId = req.params.id;
    const userId = req.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json({ message: "post does not exists" });
    }
    const dislikePost = await post.updateOne({ $pull: { likes: userId } });
    await post.save();
    const removePostIdInUserLike = await User.findByIdAndUpdate(
      userId,
      { $pull: { likes: post._id } }, // $pull remove specific value
      { new: true }
    );
    if (!dislikePost || !removePostIdInUserLike) {
      return res.status(400).json({ message: "Some error to Like this Post" });
    }
    return res
      .status(200)
      .json({ message: "succes to like post", data: removePostIdInUserLike });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
