const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


forecast(37.8267, -122.4233, (error, data) => {
    console.log('Fore Erro: ', error)
    console.log('Fore Data: ', data)
  })

geocode('Philadelphia', (error, data) => {
    console.log('Geo Erro: ', error)
    console.log('Geo Data: ', data)
})

//console.log(a(2, 3))