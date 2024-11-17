import mongoose from "mongoose";
import Conversation from "../models/ConversationModel.js";
import Message from "../models/MessageModel.js";
import { AuthRequest } from "../types/postTypes.js";
import { Response } from "express";

export const sendMessage = async (req: AuthRequest, res: Response) => {
  try {
    const { text } = await req.body;
    if (!text) {
      return res.status(400).json({ message: "please pass text" });
    }
    const recieverId = req.params.id;
    const senderId = req.id;
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }
    const messageInDb = await Message.create({
      sender: senderId,
      conversation: conversation._id,
      content: text,
    });
    if (!messageInDb) {
      return res
        .status(400)
        .json({ message: "message not send some error", error: messageInDb });
    }
    conversation.messages.push(messageInDb._id as mongoose.Types.ObjectId);
    await conversation.save();
    return res.status(200).json({
      message: "message send succefully",
      data: { conversation, messageInDb },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error });
  }
};
