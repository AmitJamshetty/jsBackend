require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/twitter', (req, res) => {
    res.send('Twitter')
})

app.get('/login', (req, res) => {
    res.send('<h2>Head tag</h2>')
})

app.listen(process.env.PORT, () => {
    console.log('Server istening on: ', process.env.PORT)
})