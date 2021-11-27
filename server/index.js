require('dotenv').config()
PORT = process.env.PORT || 8080

const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('./connect')

const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

// Connect DB
mongoose.connect(process.env.DB_URL)

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('common'))

// routes
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)

app.get('/', (req, res) => {
  res.send('Home page')
})

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`)
})
