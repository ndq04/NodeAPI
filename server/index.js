require('dotenv').config()
PORT = process.env.PORT || 8080

const express = require('express')
const app = express()
const morgan = require('morgan')

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('common'))

app.get('/', (req, res) => {
  res.send('Home page')
})

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`)
})
