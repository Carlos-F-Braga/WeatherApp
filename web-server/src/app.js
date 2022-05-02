const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Help Page!')
})

app.get('/about', (req, res) => {
    res.send('About Page!')
})

app.get('/weather', (req, res) => {
    res.send('Weather Page!')
})

const port = 3000

app.listen(port, () => {
    console.log('Server is listening on port:', port )
})