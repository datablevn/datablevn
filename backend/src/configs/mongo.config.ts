import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "../utils/logger";

// Load environment variables
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  logger.error("Mongo URI is not defined");
  throw new Error("Mongo URI is not defined");
}

export const connectMongoDB = async () => {
  const options = {
    autoIndex: false, // Don't build indexes
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
  };

  try {
    await mongoose.connect(MONGO_URI, options);
    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.error("Failed to connect to MongoDB:", error);
    throw error;
  }
};
