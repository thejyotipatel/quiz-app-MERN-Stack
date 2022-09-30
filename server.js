const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const passport = require('passport')
const authRouter = require('./router/authRouter')
const queRouter = require('./router/queRouter')
require('./passports/auth')
const session = require('express-session')

// db
const connectDB = require('./db/connect')

// middleware
const pathPrintOnConsole = require('./middleware/pathPrintOnConsole')
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware')
const notFoundMiddleware = require('./middleware/not-found')
app.use(express.json())

app.use(session({ secret: 'cats' }))
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRouter)
app.use('/api/v1', queRouter)

app.use(pathPrintOnConsole)
app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const port = process.env.PORT || 5000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    console.log('connect to db...')
    app.listen(port, () => {
      console.log(`server running at port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
