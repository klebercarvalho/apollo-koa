import { Logger, transports as _transports } from 'winston';

const logger = new (Logger)({
  transports: [
    new (_transports.Console)({
      json: true,
      handleExceptions: true,
      colorize: true,
    }),
  ],
  exceptionHandlers: [
    new (_transports.Console)({
      json: true,
      colorize: true,
      handleExceptions: true,
    }),
  ],
  exitOnError: false,
});

export default logger;
