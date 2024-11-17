import { Request } from "express";
import mongoose from "mongoose";
export interface commentType {
  text: string;
  author: string;
}

export interface userIdParams {
  postId: string;
}

export interface AuthRequest extends Request {
  id?: mongoose.Types.ObjectId;
}
