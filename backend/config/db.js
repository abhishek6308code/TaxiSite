import mongoose from "mongoose";
import "dotenv/config.js";

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.log("ℹ️ MongoDB not configured, skipping DB connection");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ Mongo connection error:", err.message);
  }
};

export default connectDB;
