const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes/index')

const app = express()
app.use(cors())

app.use('/api', router)

const PORT = process.env.PORT || 2002

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Connected to DB")
    console.log(`Server is running on http://localhost:${PORT}`)
  })
}).catch((error) => {
  console.error("Failed to connect to DB:", error)
})
