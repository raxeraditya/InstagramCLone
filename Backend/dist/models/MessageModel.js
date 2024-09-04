import { Schema, model } from 'mongoose';
// Message Schema
const messageSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    conversation: { type: Schema.Types.ObjectId, ref: 'Conversation', required: true },
    content: { type: String, required: true },
}, { timestamps: true });
const Message = model('Message', messageSchema);
export default Message;
