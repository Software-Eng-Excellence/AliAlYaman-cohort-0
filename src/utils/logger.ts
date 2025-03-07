import config  from "../config";
import winston from "winston";

// Logger levels : info, error, warn, http, verbose, debug, silly

const {isDev, logDir} =config;

const logFileFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.splat(),
    winston.format.errors({ stack: true }),
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
    new winston.transports.File({ filename: "error.log", level: "error", format: logFileFormat, dirname: logDir }),
    new winston.transports.File({ filename: "combined.log", format: logFileFormat, dirname: logDir }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "exceptions.log", dirname: logDir }),
    ],
});

if(isDev){
    logger.add(new winston.transports.Console({ format: logConsoleFormat }));
    logger.level = "debug";
}


export default logger;
