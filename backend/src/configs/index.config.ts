import { connectPostgresDB } from "./postgres.config";
import { connectMongoDB } from "./mongo.config";
import { connectRedis } from "./redis.config";

export const connectDatabases = async () => {
  await connectPostgresDB();
  await connectMongoDB();
  await connectRedis();
};
