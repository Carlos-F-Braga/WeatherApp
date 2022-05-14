const path = require('path')
const express = require('express')

const app = express()

// Define Paths for Express config
const PublicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//Setup static directory to serve
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