import { Schema, model, Types, Document } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  avatar?: string;
  bio?: string;
  followers?: Types.ObjectId[];
  following?: Types.ObjectId[];
  posts?: Types.ObjectId[];
  likes?: Types.ObjectId[];
  saves?: Types.ObjectId[];
}
const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      minlength: [3, "Username must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
      select: false, // Don't include password in queries by default
    },
    avatar: {
      type: String,
      default: "default-avatar.png",
    },
    followers: {
      type: [Types.ObjectId],
      ref: "User",
    },
    following: {
      type: [Types.ObjectId],
      ref: "User",
    },
    posts: {
      type: [Types.ObjectId],
      ref: "Post",
    },
    bio: {
      type: String,
      maxlength: [200, "Bio cannot exceed 200 characters"],
    },
    likes: {
      type: [Types.ObjectId],
      ref: "User",
    },
    saves: {
      type: [Types.ObjectId],
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", userSchema);

export default User;
