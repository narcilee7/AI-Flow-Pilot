import app from './server'
import dotenv from 'dotenv'
import logger from './utils/logUtil'

dotenv.config()

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}, full url: http://127.0.0.1:${PORT}`)
})