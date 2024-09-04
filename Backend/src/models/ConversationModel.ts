import { Schema, model, Types, Document } from 'mongoose';

// Interface for the Conversation document
interface IConversation extends Document {
  participants: Types.ObjectId[];
  messages: Types.ObjectId[];
}

// Conversation Schema
const conversationSchema = new Schema<IConversation>(
  {
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  },
  { timestamps: true }
);

const Conversation = model<IConversation>('Conversation', conversationSchema);

export default Conversation;
