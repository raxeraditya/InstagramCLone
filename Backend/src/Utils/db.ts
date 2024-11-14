import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const { connections, ConnectionStates } = await mongoose.connect(
      process.env.MONGO_URI as string
    );
    const connectionState = connections[0].readyState;
    console.log(connectionState);
    console.log("connect db");
  } catch (error) {
    console.log(error, "error wile connecting");
  }
};

export default connectDb;
