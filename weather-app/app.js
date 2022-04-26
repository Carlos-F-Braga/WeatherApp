const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=1372f2db0562c13bc01b59b2830654a9&query=37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current)
    
    console.log('Atualmente a temperatura é de ' + response.body.current.temperature + ' graus, mas parece ser de ' + response.body.current.feelslike + ' graus' )
})