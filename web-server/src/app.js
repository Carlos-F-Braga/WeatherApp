const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1> Weather </h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Andrew',
        age: 27
    }, {
        name: 'Carlos',
        age: 20
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1> About! </h1>')
})

app.get('/weather', (req, res) => {
    res.send([{
        Location: 'Philadelphia',
        Forecast: 'Está Nevando'
    }, {
        Location: 'Rio Preto',
        Forecast: 'Está Queimando'
    }])
})

const port = 3000

app.listen(port, () => {
    console.log('Server is listening on port:', port )
})