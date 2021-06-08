import winston from "winston";
const { createLogger, transports, format } = winston;
const { combine, timestamp, json, simple, colorize, printf, label } = format;

const printFormat = printf(( { timestamp, label, level, message }) => {
    return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = {
    file: combine(
    label({
        label: "비스 뮤직 웹"
    }),
    // colorize(),
    timestamp({
        format: "YYYY-MM-DD HH:mm:dd"
    }),
    printFormat
    ),
    console: combine(
        colorize(),
        simple()
    )
};

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs",
        level: "info",
        format: printLogFormat.file,
    }),
    console: new transports.Console({
        level: "info",
        format: printLogFormat.console,
    })
}

const logger = createLogger({
    transports: [opts.file],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(opts.console);
}

export default logger;