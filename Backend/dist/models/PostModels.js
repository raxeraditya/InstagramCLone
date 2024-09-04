import { Schema, model } from 'mongoose';
// Post Schema
const postSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    caption: { type: String },
    imageUrl: { type: String, required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true });
const Post = model('Post', postSchema);
export default Post;
