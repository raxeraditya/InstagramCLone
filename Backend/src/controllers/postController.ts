import { Response } from "express";
import mongoose from "mongoose";
import Comment from "../models/CommentModel.js";
import Post from "../models/PostModels.js";
import { AuthRequest } from "../types/postTypes.js";

export const addComment = async (req: AuthRequest, res: Response) => {
  try {
    const postId = req.params.id;
    // const commentKrneWalaUserKiId = req.id;

    const { text, commentUserId } = await req.body;
    const post = await Post.findById(postId);
    console.log(post, text, commentUserId);
    if (!text)
      return res
        .status(400)
        .json({ message: "text is required", success: false });

    const comment = await Comment.create({
      user: commentUserId,
      post: postId,
      content: text,
    });

    post?.comments?.push(comment._id as mongoose.Types.ObjectId);
    await post?.save();

    return res.status(201).json({
      message: "Comment Added",
      comment,
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
    const { author, caption } = body;
    if (!author || !caption) {
      return res.status(400).json({ message: "please fill sufficient data" });
    }
    const post = await Post.create({
      author: author,
      caption: caption,
    });
    return res
      .status(200)
      .json({ message: "post create succesfully", data: post });
  } catch (error) {
    return res.status(500).json({ message: "server error", error: error });
  }
};
