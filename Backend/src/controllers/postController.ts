import { Response } from "express";
import mongoose from "mongoose";
import Comment from "../models/CommentModel.js";
import Post from "../models/PostModels.js";
import { AuthRequest } from "../types/postTypes.js";
import User from "../models/UserModel.js";
import fs from "fs";
import { uploadOnCloudinary } from "../lib/cloudinaryConfig.js";
export const addComment = async (req: AuthRequest, res: Response) => {
  try {
    const postId = req.params.id;
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
    const localFilePath = req.file?.path;
    const localFile = String(localFilePath);
    const { caption } = body;
    if (!caption || !localFile) {
      fs.unlinkSync(localFile);
      return res.status(400).json({ message: "please fill sufficient data" });
    }
    const avatarUrl = await uploadOnCloudinary(localFile);
    if (!avatarUrl) {
      fs.unlinkSync(localFile);
      return res.status(404).json({ message: "avatarUrl not create" });
    }
    const post = await Post.create({
      author: req.id,
      caption: caption,
      imageUrl: avatarUrl,
    });
    return res
      .status(200)
      .json({ message: "post create succesfully", data: post });
  } catch (error) {
    return res.status(500).json({ message: "server error", error: error });
  }
};
// delete post
export const deletPost = async (req: AuthRequest, res: Response) => {
  try {
    const postId = req.params.id;
    const postInDb = await Post.findById(postId);
    if (!postInDb || postId) {
      return res
        .status(200)
        .json({ message: "Post User Pass", data: { postId, postInDb } });
    }
    const userInPostId = postInDb?.author;
    if (userInPostId !== req.id) {
      return res.status(400).json({ message: "this not your post" });
    }
    const deletePost = await Post.findByIdAndDelete(postId);
    if (!deletPost) {
      return res
        .status(400)
        .json({ message: "connot delete post", data: deletPost });
    }
    return res
      .status(200)
      .json({ message: "Post delete succesfully", data: deletPost });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error });
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
// save post
export const saveUserPost = async (req: AuthRequest, res: Response) => {
  try {
    const postId = req.params.id;
    if (!postId) {
      return res.status(400).json({ message: "please enter Post Id" });
    }
    const result = await User.updateOne(
      { _id: req.id },
      { $addToSet: { saves: postId } }
    );
    if (!result) {
      return res
        .status(400)
        .json({ message: "post id allready save", error: result });
    }
    return res
      .status(200)
      .json({ message: "post saves succesfully", data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
// get indivisual post
export const getSinglePost = async (req: AuthRequest, res: Response) => {
  try {
    const postId = req.params.id;
    if (!postId) {
      return res.status(400).json({ message: "please enter Post Id" });
    }
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json({ message: "post does not exists" });
    }
    return res.status(200).json({ message: "Succes To find post", data: post });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
// get 5 post
export const getPostUsingQueryOrPageNo = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const pageQuery = req.query.page;
    const limitQuery = req.query.limit;
    if (!pageQuery) {
      return res.status(400).json({ message: "please enter Post Id" });
    }
    const limit = Number(limitQuery) || 3;
    const page = Number(pageQuery) || 1;
    const skip = (page - 1) * limit;
    console.log(limit, skip, page);
    const posts = await Post.find().skip(skip).limit(limit);
    if (!posts) {
      return res.status(400).json({ message: "post not found", error: posts });
    }
    if (posts.length === 0) {
      return res.status(400).json({ message: "No more post in db" });
    }
    return res.status(200).json({ message: "post found succes", data: posts });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
