import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import supertokens from "supertokens-node";
import { middleware, errorHandler } from "supertokens-node/framework/express";
import {
  getWebsiteDomain,
  SuperTokensConfig,
} from "./src/configs/supertokens.config";
import morganMiddleware from "./src/middlewares/morgan.middleware";
import logger from "./src/utils/logger";
import { connectDatabases } from "./src/configs/index.config";
import { HealthCheckRoute } from "./src/routes/index.routes";

const BACKEND_PORT = process.env.BACKEND_PORT || 3000;

supertokens.init(SuperTokensConfig);

const app = express();

app.use(morganMiddleware);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(
  cors({
    origin: getWebsiteDomain(),
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

app.use(middleware()); // This exposes all the APIs from SuperTokens to the client.

// Healthcheck endpoint
app.use(HealthCheckRoute);

// In case of session related errors, this error handler
// returns 401 to the client.
app.use(errorHandler());

async function startServer() {
  try {
    await connectDatabases();
    app.listen(BACKEND_PORT, () =>
      logger.info(`Server is running on http://localhost:${BACKEND_PORT}`)
    );
  } catch (error) {
    logger.error("Unable to start the server:", error);
  }
}

startServer();
