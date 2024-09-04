import { Schema, model } from 'mongoose';
// Conversation Schema
const conversationSchema = new Schema({
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
}, { timestamps: true });
const Conversation = model('Conversation', conversationSchema);
export default Conversation;
