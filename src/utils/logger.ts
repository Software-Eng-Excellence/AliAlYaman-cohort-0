import config from "../config";
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

// Logger levels : info, error, warn, http, verbose, debug, silly

const { isDev, logDir } = config;

const logFileFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json(),
  winston.format.splat(),
  winston.format.errors({ stack: true })
);

const logConsoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: "HH:mm:ss" }),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message} ${info.stack || ""}`
  )
);

const logger = winston.createLogger({
  level: "info",
  transports: [
    new DailyRotateFile({
      filename: `${logDir}/error-%DATE%.log`, // Log file name pattern
      datePattern: "YYYY-MM-DD", // Rolling based on date
      level: "error",
      format: logFileFormat,
      maxFiles: "14d", // Keep logs for 14 days
      zippedArchive: true, // Compress old logs
    }),
    new DailyRotateFile({
      filename: `${logDir}/combined-%DATE%.log`,
      datePattern: "YYYY-MM-DD",
      format: logFileFormat,
      maxFiles: "14d",
      zippedArchive: true,
    }),
  ],
  exceptionHandlers: [
    new DailyRotateFile({
      filename: `${logDir}/exceptions-%DATE%.log`,
      datePattern: "YYYY-MM-DD",
      maxFiles: "14d",
      zippedArchive: true,
    }),
  ],
});

if (isDev) {
  logger.add(new winston.transports.Console({ format: logConsoleFormat }));
  logger.level = "debug";
}

export default logger;
