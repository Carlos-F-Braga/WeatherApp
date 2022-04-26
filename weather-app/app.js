const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=1372f2db0562c13bc01b59b2830654a9&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})