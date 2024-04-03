import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const logLevel = process.env.LOG_LEVEL || "debug";
  const levelExists = Object.keys(levels).includes(logLevel);
  console.info(`Log level set to: ${levelExists ? logLevel : "debug"}`);
  return levelExists ? logLevel : "debug";
};

winston.addColors({
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
});

// Format for console that is readable and not JSON
const consoleFormat = winston.format.combine(
  winston.format.colorize({ all: true }),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

// JSON format for file transports
const fileFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.errors({ stack: true }), // To include error stack traces
  winston.format.splat(),
  winston.format.json()
);

const transports = [
  new winston.transports.Console({
    format: consoleFormat,
  }),
  new DailyRotateFile({
    filename: "logs/error-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    level: "error",
    maxSize: "20m",
    maxFiles: "14d",
    format: fileFormat,
  }),
  new DailyRotateFile({
    filename: "logs/all-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    maxSize: "20m",
    maxFiles: "14d",
    format: fileFormat,
  }),
];

const logger = winston.createLogger({
  level: level(),
  levels,
  transports,
});

export default logger;
