import { Sequelize } from "sequelize";
import logger from "../utils/logger";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const {
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_PORT,
  NODE_ENV,
} = process.env;

const isProduction = NODE_ENV === "production";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: POSTGRES_HOST,
  port: parseInt(POSTGRES_PORT || "5432"),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  // Conditionally add SSL configuration
  dialectOptions: isProduction
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: true, // For production, you usually want to enforce SSL certificate validation
        },
      }
    : {},
  logging: (msg) => (NODE_ENV === "development" ? logger.debug(msg) : false),
});

export const connectPostgresDB = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Connected to PostgreSQL");
  } catch (error) {
    logger.error("Failed to connect to PostgreSQL:", error);
    process.exit(1);
  }
};
