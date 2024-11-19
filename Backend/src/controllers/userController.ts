import { Response } from "express";
import User from "../models/UserModel.js"; // Assuming you have a User model
import fs from "fs";
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
import {
  deleteFromCloudinary,
  getCloudinaryPublicId,
  uploadOnCloudinary,
} from "../lib/cloudinaryConfig.js";

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
      userid: savedUser._id as mongoose.Types.ObjectId,
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
      userid: userFind._id as mongoose.Types.ObjectId,
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
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};

export const updateAvatar = async (req: AuthRequest, res: Response) => {
  try {
    const avatarLocal = req.file?.path;
    const avatarLocalPath = String(avatarLocal);
    const userId = "6739964599cbb32f0a4181c9";
    if (!avatarLocalPath) {
      fs.unlinkSync(avatarLocalPath);
      return res.status(404).json({ message: "file not found" });
    }

    //TODO: delete old image - assignment
    const user = await User.findById(userId);
    if (!user) {
      fs.unlinkSync(avatarLocalPath);
      return res.status(404).json({ message: "User not found." });
    }
    if (user.avatar && user.avatar !== "default-avatar.png") {
      const publicId = getCloudinaryPublicId(user.avatar);
      await deleteFromCloudinary(publicId);
    }
    const avatarUrlUser = await uploadOnCloudinary(avatarLocalPath);
    if (!avatarUrlUser) {
      fs.unlinkSync(avatarLocalPath);
      return res.status(404).json({ message: "avatarUrl not create" });
    }
    const avatarUrl = String(avatarUrlUser);
    user.avatar = avatarUrl;
    await user.save();
    return res.status(200).json({ message: "succes", data: avatarUrl });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error });
  }
};
