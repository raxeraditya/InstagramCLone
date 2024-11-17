import { Response } from "express";
import mongoose from "mongoose";
import Comment from "../models/CommentModel.js";
import Post from "../models/PostModels.js";
import { AuthRequest } from "../types/postTypes.js";

export const addComment = async (req: AuthRequest, res: Response) => {
  try {
    const postId = req.params.id;
    // const commentKrneWalaUserKiId = req.id;
    const { comment } = await req.body;
    const post = await Post.findById(postId);
    if (!comment)
      return res
        .status(400)
        .json({ message: "comment is required", success: false });
    const CommentInDb = await Comment.create({
      user: req.id,
      post: postId,
      content: comment,
    });
    post?.comments?.push(CommentInDb._id as mongoose.Types.ObjectId);
    await post?.save();
    return res.status(201).json({
      message: "Comment Added",
      CommentInDb,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server error",
      success: false,
    });
  }
};

export const addPost = async (req: AuthRequest, res: Response) => {
  try {
    const body = await req.body;
    const { caption } = body;
    if (!caption) {
      return res.status(400).json({ message: "please fill sufficient data" });
    }
    const post = await Post.create({
      author: req.id,
      caption: caption,
    });
    return res
      .status(200)
      .json({ message: "post create succesfully", data: post });
  } catch (error) {
    return res.status(500).json({ message: "server error", error: error });
  }
};
