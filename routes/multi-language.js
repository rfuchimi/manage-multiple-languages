// https://github.com/motdotla/dotenv
const dotenv = require('dotenv').config()
// https://github.com/expressjs/express
const express = require('express')
// https://github.com/watson-developer-cloud/node-sdk
const watson = require('watson-developer-cloud')
// Set up Expressjs router
const router = express.Router()
// Set up Watson Conversation with credentials
const language_translator = watson.language_translator({
    username: process.env.LANGUAGE_TRANSLATOR_USERNAME,
    password: process.env.LANGUAGE_TRANSLATOR_PASSWORD,
    version: 'v2'
});
router.post('/identify', (req, res) => {
    const text = req.body.text
    if (!text) {
        return res.json({
            success: false,
            message: 'Missing "text" parameter',
            language: null
        })
    }
    language_translator.identify({
        text: text
    }, (err, identifiedLanguages) => {
        if (err) {
            console.log(err)
            return res.json({
                success: false,
                message: err.message,
                language: null
            })
        } else {
            return res.json({
                success: true,
                message: 'Ok',
                language: identifiedLanguages
            })
        }
    });
})

module.exports = router
