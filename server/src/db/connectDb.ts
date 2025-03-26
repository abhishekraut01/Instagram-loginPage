import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/instagram-clone"
    );
    console.log(
      `MongoDB connected successfully on port : ${connectionInstance.connection.port} 🚀`
    );
  } catch (error) {
    console.log("MongoDB connection error ❌ ");
    process.exit(1);
  }
};
