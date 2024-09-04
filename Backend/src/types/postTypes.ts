import { Request } from "express";
export interface commentType{
    text:string;
    author :string
}

export interface userIdParams{
    postId:string;
}

export interface AuthRequest extends Request{
    id:string
}