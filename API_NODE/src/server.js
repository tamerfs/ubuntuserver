'use strict'
const express = require('express')

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

// App
const app = express()

app.listen(PORT, HOST, () => {
  if (HOST === '0.0.0.0') {
    console.log(`Running on http://localhost:${PORT}`)
  } else {
    console.log(`Running on http://${HOST}:${PORT}`)
  }
})

app.get('/', (req, res) => {
  res.send('Hello World')
})
