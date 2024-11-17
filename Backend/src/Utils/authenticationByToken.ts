import Jwt, { JwtPayload } from "jsonwebtoken";

import { AuthRequest } from "../types/postTypes.js";
import { tokenType } from "../types/userTypes.js";
import { NextFunction, Response } from "express";
import mongoose from "mongoose";

export const isAuthenticated = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;
    const authHeader = req.headers.authorization;
    console.log(
      "authheader ................. req.headers.authorization",
      authHeader
    );
    if (!token) {
      return res
        .status(400)
        .json({ message: "token does not exitst", error: token });
    }
    const decodedData = Jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as tokenType;
    if (!decodedData) {
      return res
        .status(400)
        .json({ message: "your token is compromised", error: decodedData });
    }
    const userId = decodedData.userid;
    req.id = userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error", error });
  }
};
