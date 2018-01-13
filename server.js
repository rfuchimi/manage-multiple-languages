// https://github.com/expressjs/body-parser
const bodyParser = require('body-parser')
// https://github.com/motdotla/dotenv
const dotenv = require('dotenv').config()
// https://github.com/expressjs/express
const express = require('express')
// Set up Expressjs with Body-Parser library
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Language Translator service
const multiLanguage = require('./routes/multi-language')
app.use('/language', multiLanguage)
// Set up server config
const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000
const host = process.env.HOST || '0.0.0.0'
// Start server
app.listen(port, host, () => {
    console.log(`Server is up and running at ${host}:${port}`)
})