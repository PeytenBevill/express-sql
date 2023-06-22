const express = require('express')
const app = express()
const pool = require('./sql/connection')
const userRoutes = require('./routes/users')

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`connected to the port`)
})

app.use(express.json())
app.use("/api/users", userRoutes)

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to my first API"
  })
})