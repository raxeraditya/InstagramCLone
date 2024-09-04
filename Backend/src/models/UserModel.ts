import { Schema, model, Types, Document } from 'mongoose';

// Interface for the User document
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  bio?: string;
  profilePicture?: string;
  followers: Types.ObjectId[];
  following: Types.ObjectId[];
  posts: Types.ObjectId[];
}

// User Schema
const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String },
    profilePicture: { type: String },
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  },
  { timestamps: true }
);

const User = model<IUser>('User', userSchema);

export default User;
