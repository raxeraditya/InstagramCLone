import { Schema, model, Types, Document } from 'mongoose';

// Interface for the Message document
interface IMessage extends Document {
  sender: Types.ObjectId;
  conversation: Types.ObjectId;
  content: string;
}

// Message Schema
const messageSchema = new Schema<IMessage>(
  {
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    conversation: { type: Schema.Types.ObjectId, ref: 'Conversation', required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = model<IMessage>('Message', messageSchema);

export default Message;
