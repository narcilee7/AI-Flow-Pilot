import { LOG_LEVEL } from '@/constants/LogLevel'
import winston from 'winston'


const logger = winston.createLogger({
  level: LOG_LEVEL.DEBUG,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple(),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'logs/application-error.log',
      level: 'error',
    }),
    new winston.transports.File({
      filename: 'logs/application.log',
    }),
  ],
})

export default logger