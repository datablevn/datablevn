import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import dotenv from "dotenv";
import morganMiddleware from "./src/middlewares/morgan.middleware";
import logger from "./src/utils/logger";
dotenv.config({ path: "../.env" });
import supertokens from "supertokens-node";
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import {
  middleware,
  errorHandler,
  SessionRequest,
} from "supertokens-node/framework/express";
import { getWebsiteDomain, SuperTokensConfig } from "./config";
import Multitenancy from "supertokens-node/recipe/multitenancy";

const BACKEND_PORT = process.env.BACKEND_PORT || 3000;

supertokens.init(SuperTokensConfig);

const app = express();

app.use(morganMiddleware);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(
  cors({
    origin: getWebsiteDomain(),
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

// This exposes all the APIs from SuperTokens to the client.
app.use(middleware());

// This API is used to check if the backend is running.
app.get("/api/status", (req, res) => {
  logger.info("Checking the API status: Everything is OK");
  res.status(200).send({
    status: "UP",
    message: "The API is up and running!",
  });
});

// An example API that requires session verification
app.get("/sessioninfo", verifySession(), async (req: SessionRequest, res) => {
  let session = req.session;
  res.send({
    sessionHandle: session!.getHandle(),
    userId: session!.getUserId(),
    accessTokenPayload: session!.getAccessTokenPayload(),
  });
});

// This API is used by the frontend to create the tenants drop down when the app loads.
// Depending on your UX, you can remove this API.
app.get("/tenants", async (req, res) => {
  let tenants = await Multitenancy.listAllTenants();
  res.send(tenants);
});

// In case of session related errors, this error handler
// returns 401 to the client.
app.use(errorHandler());

app.listen(BACKEND_PORT, () =>
  logger.info(`Server is running on http://localhost:${BACKEND_PORT}`)
);
