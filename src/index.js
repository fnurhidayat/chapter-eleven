const express = require('express')
const router = require('./router') 
const app = express()

const dotenv = require('dotenv')
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

module.exports = app
