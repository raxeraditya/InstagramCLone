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
    const data = updateUsernameZodValidation.safeParse(body);
    console.log(body, data);
    if (data.success) {
      const userId = req.params.id; // pass by frontend allways has string and not change
      if (!userId) {
        return res.status(201).json({ message: "please your id" });
      }
      const userName = data.data;
      const updatedUser = await User.findByIdAndUpdate(userId, userName, {
        new: true,
      });
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(updatedUser);
    }
    const apiData = data?.error?.formErrors?.fieldErrors;
    return res.status(400).json({ message: apiData });
  } catch (err) {
    res.status(400).json({ message: "Error updating user", error: err });
  }
};

// Update a user by Email
export const updateUserByEmail = async (req: AuthRequest, res: Response) => {
  try {
    const body: emailValidation = await req.body;
    const data = updateEmailZodValidation.safeParse(body);
    console.log(body, data);
    if (data.success) {
      const userId = req.params.id; // pass by frontend allways has string and not change
      if (!userId) {
        return res.status(201).json({ message: "please your id" });
      }
      const email = data.data;
      const updatedUser = await User.findByIdAndUpdate(userId, email, {
        new: true,
      });
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(updatedUser);
    }
    const apiData = data?.error?.formErrors?.fieldErrors;
    return res.status(400).json({ message: apiData });
  } catch (err) {
    res.status(400).json({ message: "Error updating user", error: err });
  }
};

// Update a user by Password
export const updateUserByPassword = async (req: AuthRequest, res: Response) => {
  try {
    const body: passwordValidation = await req.body;
    const data = updatePasswordZodValidation.safeParse(body);
    console.log(body, data);
    if (data.success) {
      const userId = req.params.id; // pass by frontend allways has string and not change
      if (!userId) {
        return res.status(201).json({ message: "please your id" });
      }
      const password = data.data;
      const updatedUser = await User.findByIdAndUpdate(userId, password, {
        new: true,
      });
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(updatedUser);
    }
    const apiData = data?.error?.formErrors?.fieldErrors;
    return res.status(400).json({ message: apiData });
  } catch (err) {
    res.status(400).json({ message: "Error updating user", error: err });
  }
};
