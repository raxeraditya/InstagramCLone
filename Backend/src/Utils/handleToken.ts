import jwt from "jsonwebtoken";
import { AuthRequest } from "../types/postTypes.js";
import { tokenType } from "../types/userTypes.js";
import { Response } from "express";
import cookieOPtionData from "../types/cookieTypes.js";

export const jenerateTokenSetCookie = (
  req: AuthRequest,
  res: Response,
  tokenData: tokenType
) => {
  try {
    const token = jwt.sign(tokenData, process.env.JWT_SECRET as string, {
      expiresIn: "48h",
    });
    if (!token) {
      return res
        .status(400)
        .json({ message: "some problem while create a token", error: token });
    }
    console.log(token);
    return res
      .status(200)
      .cookie("token", token, cookieOPtionData)
      .json({ message: "success login", data: tokenData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error", error });
  }
};
