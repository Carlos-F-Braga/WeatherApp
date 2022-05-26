const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

const carlos = 'Carlos Frederyco'

// Define Paths for Express config
const PublicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(PublicDirectoryPath))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: carlos
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: carlos
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text',
        title: 'Help',
        name: carlos
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        res.send({
            error: 'Voce precisa prover um Endereço'
        })
    }
    else {
        geocode(req.query.address, (error, { latitude, longitude, location }) => {
            if (error) {
                return res.send({ error })
            }

            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return res.send({ error })
                }

                res.send({
                    forecast: forecastData,
                    location,
                    latitude,
                    longitude,
                    address: req.query.address
                })
            })
        })
}
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        res.send({
            error: 'Voce precisa prover um Termo de Busca'
        })
    }

    res.send({ 
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        error: 'Help article not found',
        title: '404 Help',
        name: carlos
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        error: 'Page not found',
        title: '404',
        name: carlos
    })
})

const port = 3000

app.listen(port, () => {
    console.log('Server is listening on port:', port )
})