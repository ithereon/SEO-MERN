require('dotenv').config()
const express = require('express')
const cors = require('cors')
// check on your db, you will have another collection (next to people) which is 'mySessions'
const loginRouter = require('./routes/loginRoutes')
const connectDB = require('./config/db')

const app = express()
const port = process.env.PORT || 5001

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// This is where your API is making its initial connection to the database
connectDB()

app.use(cors(corsOptions))
app.use(express.json())

// ROUTERS
app.use('/api', loginRouter)

// START SERVER
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

module.exports = app
