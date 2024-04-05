import Redis from "ioredis";
import logger from "../utils/logger";
import dotenv from "dotenv";

dotenv.config();
export const connectRedis = async () => {
  const redis = new Redis({
    port: parseInt(process.env.REDIS_PORT || "6379"),
    host: process.env.REDIS_HOST || "localhost",
    password: process.env.REDIS_PASSWORD || undefined,
    db: 0, // Default database
    // Additional options
    retryStrategy: (times) => {
      if (times > 5) {
        // End reconnecting after 5 attempts
        return null;
      }
      const delay = Math.min(times * 50, 2000);
      logger.error(`Redis connection failed. Retrying in ${delay}ms`);
      return delay;
    },

    reconnectOnError: (err) => {
      logger.error("Failed to reconnect to Redis:", err);

      if (err.message.includes("READONLY")) {
        // This error message is returned when the Redis server is read-only
        return true; // Try to reconnect
      }

      return false; // Stop trying to reconnect on error
    },

    enableReadyCheck: true, // This is true by default, explicitly setting it for clarity
  });

  redis.on("ready", () => {
    logger.info("Connected to Redis");
  });

  redis.on("error", (err) => {
    logger.error("Failed to connect to Redis:", err);
  });

  redis.on("close", () => {
    logger.warn("Redis connection closed.");
  });
};
