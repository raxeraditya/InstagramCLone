import { Schema, model, Types, Document } from 'mongoose';

// Interface for the Post document
interface IPost extends Document {
  author: Types.ObjectId;
  caption?: string;
  imageUrl: string;
  likes: Types.ObjectId[];
  comments: Types.ObjectId[];
}

// Post Schema
const postSchema = new Schema<IPost>(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    caption: { type: String },
    imageUrl: { type: String,},
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true }
);

const Post = model<IPost>('Post', postSchema);

export default Post;
