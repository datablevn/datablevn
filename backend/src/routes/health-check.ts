export const router = require("express").Router();

router.get("/health", (_req: any, res: any) => {
  const uptime = process.uptime();
  const days = Math.floor(uptime / (3600 * 24));
  const hours = Math.floor((uptime % (3600 * 24)) / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);

  const healthCheck = {
    uptime: `${days}d:${hours}h:${minutes}m:${seconds}s`,
    message: "OK",
    timestamp: Date.now(),
  };

  try {
    res.send(healthCheck);
  } catch (e: any) {
    healthCheck.message = e;
    res.status(503).send();
  }
});
