import { Response } from "express";
import User from "../models/UserModel.js";
import { AuthRequest } from "../types/postTypes.js";
import {
  updateEmailZodValidation,
  updatePasswordZodValidation,
  updateUsernameZodValidation,
} from "../types/zodTypes.js";
import {
  emailValidation,
  passwordValidation,
  usernameValidation,
} from "../types/userTypes.js";

// Update a user by username
export const updateUserByUsername = async (req: AuthRequest, res: Response) => {
  try {
    const body: usernameValidation = await req.body;
    const { success, error, data } =
      updateUsernameZodValidation.safeParse(body);
    if (!success) {
      return res.status(400).json({ message: "Something is wrong", error });
    }
    const userName = data;
    const updatedUser = await User.findByIdAndUpdate(req.id, userName, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "user update successfully", data: updatedUser });
  } catch (err) {
    res.status(400).json({ message: "Error updating user", error: err });
  }
};

// Update a user by Email
export const updateUserByEmail = async (req: AuthRequest, res: Response) => {
  try {
    const body: emailValidation = await req.body;
    const { success, error, data } = updateEmailZodValidation.safeParse(body);
    if (!success) {
      return res.status(400).json({ message: "Something is wrong", error });
    }
    const email = data;
    const updatedUser = await User.findByIdAndUpdate(req.id, email, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "user update successfully", data: updatedUser });
  } catch (err) {
    res.status(400).json({ message: "Error updating user", error: err });
  }
};

// Update a user by Password
export const updateUserByPassword = async (req: AuthRequest, res: Response) => {
  try {
    const body: passwordValidation = await req.body;
    const { success, data, error } =
      updatePasswordZodValidation.safeParse(body);
    if (!success) {
      return res.status(400).json({ message: "Something is wrong", error });
    }
    const password = data;
    const updatedUser = await User.findByIdAndUpdate(req.id, password, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "user update successfully", data: updatedUser });
  } catch (err) {
    res.status(400).json({ message: "Error updating user", error: err });
  }
};
