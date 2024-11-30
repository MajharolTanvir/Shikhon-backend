import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { Server } from 'http'

process.on('uncaughtException', err => {
  console.error('Uncaught exception is detected...', err)
  process.exit(1)
})

let server: Server

async function main() {
  try {
    await mongoose.connect(config.database as string)
    console.info(`🛢️ Database is connected successfully`)

    server = app.listen(config.port, () => {
      console.info(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    console.error(`Failed to connect database`, error)
  }

  process.on('unhandledRejection', err => {
    console.error('Unhandled rejection is detected...')
    if (server) {
      server.close(() => {
        console.error(err)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

main()

// process.on('SIGTERM', () => {
//   logger.info('SIGTERM is retrieved')
//   if (server) {
//     server.close()
//   }
// })
