import { Response } from "express";
import mongoose from "mongoose";
import Comment from "../models/CommentModel";
import Post from "../models/PostModels";
import { AuthRequest } from "../types/postTypes";
export const addComment = async (req:AuthRequest,res:Response) =>{
    try {
        const postId = req.params.id;
        const commentKrneWalaUserKiId = req.id;

        const {text} = req.body;

        const post = await Post.findById(postId);

        if(!text) return res.status(400).json({message:'text is required', success:false});

        const comment = await Comment.create({
            text,
            author:commentKrneWalaUserKiId,
            post:postId
        })

        await comment.populate({
            path:'author',
            select:"username profilePicture"
        });
        
        post?.comments.push(comment._id as mongoose.Types.ObjectId)
        await post?.save()

        return res.status(201).json({
            message:'Comment Added',
            comment,
            success:true
        })

    } catch (error) {
        console.log(error);
    }
};