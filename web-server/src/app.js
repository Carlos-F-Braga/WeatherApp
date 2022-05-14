const path = require('path');
const express = require('express')

const app = express()
const PublicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(PublicDirectoryPath))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Carlos Frederyco'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Carlos Frederyco'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text'
    })
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